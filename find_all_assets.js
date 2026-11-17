const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets');
const files = fs.readdirSync(assetsDir).filter(f => f.endsWith('.js') || f.endsWith('.css'));

const assetRegex = /([a-zA-Z0-9_\-]+\-[a-zA-Z0-9_\-]+\.(?:js|css|webp|png|jpg|jpeg|svg|woff2|woff|ttf))/g;
const simpleAssetRegex = /(?:assets\/)?([a-zA-Z0-9_\-\/]+\.(?:js|css|webp|png|jpg|jpeg|svg|woff2|woff|ttf))/g;

const found = new Set();

for (const file of files) {
  try {
    const content = fs.readFileSync(path.join(assetsDir, file), 'utf8');
    let m;
    while ((m = assetRegex.exec(content)) !== null) {
      found.add(m[1]);
    }
  } catch (e) {}
}

console.log(`Found ${found.size} total referenced assets across all existing JS/CSS files.`);

// Check which ones are missing locally
const missing = [];
for (const item of found) {
  const localName = item.startsWith('assets/') ? item : 'assets/' + item;
  const localPath = path.join(__dirname, localName);
  if (!fs.existsSync(localPath)) {
    missing.push(localName);
  }
}

console.log(`Missing assets: ${missing.length}`);
fs.writeFileSync('missing_assets.json', JSON.stringify(missing, null, 2));
