const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_URL = 'https://fanout.sh/';

function fetchUrl(urlPath) {
  return new Promise((resolve) => {
    const fullUrl = urlPath.startsWith('http') ? urlPath : BASE_URL + urlPath.replace(/^\//, '');
    const req = https.get(fullUrl, { rejectUnauthorized: false }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve);
      }
      if (res.statusCode !== 200) {
        return resolve({ status: res.statusCode, data: null });
      }
      const chunks = [];
      res.on('data', (d) => chunks.push(d));
      res.on('end', () => resolve({ status: 200, data: Buffer.concat(chunks) }));
    });
    req.on('error', (err) => resolve({ status: 500, error: err.message }));
    req.setTimeout(8000, () => {
      req.destroy();
      resolve({ status: 408, error: 'timeout' });
    });
  });
}

async function run() {
  const missing = JSON.parse(fs.readFileSync('missing_assets.json', 'utf8'));
  console.log(`Starting download of ${missing.length} missing assets...`);

  let completed = 0;
  let successCount = 0;
  let failedCount = 0;
  const CONCURRENCY = 25;
  const queue = [...missing];

  async function worker() {
    while (queue.length > 0) {
      const item = queue.shift();
      const cleanPath = item.replace(/^\//, '');
      const localPath = path.join(__dirname, cleanPath);
      fs.mkdirSync(path.dirname(localPath), { recursive: true });

      if (fs.existsSync(localPath) && fs.statSync(localPath).size > 0) {
        completed++;
        successCount++;
        continue;
      }

      const res = await fetchUrl(cleanPath);
      completed++;
      if (res.status === 200 && res.data) {
        fs.writeFileSync(localPath, res.data);
        successCount++;
      } else {
        failedCount++;
      }

      if (completed % 50 === 0 || completed === missing.length) {
        console.log(`Progress: ${completed}/${missing.length} (Success: ${successCount}, Failed: ${failedCount})`);
      }
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);

  console.log(`Done! Downloaded ${successCount} files. (${failedCount} not found on server)`);
}

run().catch(console.error);
