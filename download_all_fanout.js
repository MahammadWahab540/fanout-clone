const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_URL = 'https://fanout.sh/';

function fetchUrl(urlPath) {
  return new Promise((resolve, reject) => {
    const fullUrl = urlPath.startsWith('http') ? urlPath : BASE_URL + urlPath.replace(/^\//, '');
    const req = https.get(fullUrl, { rejectUnauthorized: false }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return resolve({ status: res.statusCode, data: null });
      }
      const chunks = [];
      res.on('data', (d) => chunks.push(d));
      res.on('end', () => resolve({ status: 200, data: Buffer.concat(chunks) }));
    });
    req.on('error', (err) => resolve({ status: 500, error: err.message }));
    req.setTimeout(10000, () => {
      req.destroy();
      resolve({ status: 408, error: 'timeout' });
    });
  });
}

async function run() {
  const chunks = JSON.parse(fs.readFileSync('chunks_list.json', 'utf8'));

  const staticFiles = [
    'assets/index-CXfpSli5.js',
    'assets/brand-q-gmNaul.css',
    'assets/index-DCAXL5XB.css',
    'assets/phosphor-regular-d6b5dcdf2f.css',
    'assets/phosphor-fill-fc2384beef.css',
    'assets/phosphor-bold-0fc7c5b1b7.css',
    'assets/OverusedGrotesk-Roman-core-Bdvro-z4.woff2',
    'assets/OverusedGrotesk-Medium-core-BPZFOhJr.woff2',
    'assets/OverusedGrotesk-SemiBold-core-z15TJaaJ.woff2',
    'assets/IBMPlexMono-Regular-core-BhwDdshb.woff2',
    'assets/IBMPlexMono-Medium-core-Cm2hjasA.woff2',
    'assets/DepartureMono-Regular-core-BG0_QVaz.woff2',
    'favicon.ico',
    'favicon-32.png',
    'assets/brand/fanout-mark.svg',
    'apple-touch-icon.png',
    'manifest.webmanifest',
    'icon-192.png',
    'icon-512.png',
    'og-everything-google-l7-mapped.png',
    'sitemap.xml',
    'feed.xml',
    'llms.txt',
    'llms-full.txt'
  ];

  const allToDownload = Array.from(new Set([...staticFiles, ...chunks]));
  console.log(`Starting download of ${allToDownload.length} assets...`);

  let completed = 0;
  let successCount = 0;
  let failedCount = 0;

  const CONCURRENCY = 15;
  const queue = [...allToDownload];

  async function worker() {
    while (queue.length > 0) {
      const item = queue.shift();
      const localPath = path.join(__dirname, item.replace(/^\//, ''));
      fs.mkdirSync(path.dirname(localPath), { recursive: true });

      // Skip if already downloaded and has content
      if (fs.existsSync(localPath) && fs.statSync(localPath).size > 0) {
        completed++;
        successCount++;
        continue;
      }

      const res = await fetchUrl(item);
      completed++;
      if (res.status === 200 && res.data) {
        fs.writeFileSync(localPath, res.data);
        successCount++;
      } else {
        failedCount++;
      }

      if (completed % 25 === 0 || completed === allToDownload.length) {
        console.log(`Progress: ${completed}/${allToDownload.length} (Success: ${successCount}, Failed: ${failedCount})`);
      }
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);

  console.log(`Primary download finished. Success: ${successCount}, Failed: ${failedCount}`);

  // Now scan all downloaded CSS files for url(...) references (like icon fonts, SVGs, etc.)
  console.log('Scanning CSS files for additional font/image assets...');
  const cssDir = path.join(__dirname, 'assets');
  if (fs.existsSync(cssDir)) {
    const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));
    const extraUrls = new Set();
    for (const cssFile of cssFiles) {
      const text = fs.readFileSync(path.join(cssDir, cssFile), 'utf8');
      const matches = text.match(/url\(['"]?([^'"\)\#\?]+)/g);
      if (matches) {
        for (const m of matches) {
          const raw = m.replace(/^url\(['"]?/, '').trim();
          if (!raw.startsWith('data:') && !raw.startsWith('http')) {
            extraUrls.add(raw);
          }
        }
      }
    }

    console.log(`Found ${extraUrls.size} referenced assets in CSS files.`);
    for (const u of extraUrls) {
      const clean = u.replace(/^\//, '');
      const localPath = path.join(__dirname, clean.startsWith('assets') ? clean : path.join('assets', clean));
      if (!fs.existsSync(localPath)) {
        fs.mkdirSync(path.dirname(localPath), { recursive: true });
        const res = await fetchUrl(clean.startsWith('assets') ? clean : 'assets/' + clean);
        if (res.status === 200 && res.data) {
          fs.writeFileSync(localPath, res.data);
          console.log(`Downloaded extra CSS asset: ${clean}`);
        }
      }
    }
  }

  console.log('All downloads completed!');
}

run().catch(console.error);
