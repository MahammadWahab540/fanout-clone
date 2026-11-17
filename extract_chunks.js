const fs = require('fs');
const content = fs.readFileSync('fanout_main.js', 'utf8');
const start = content.indexOf('m.f=[');
if (start !== -1) {
  const end = content.indexOf(']', start);
  const jsonStr = content.substring(start + 4, end + 1);
  const assets = JSON.parse(jsonStr);
  console.log('Total asset chunks:', assets.length);
  fs.writeFileSync('chunks_list.json', JSON.stringify(assets, null, 2));
} else {
  console.log('m.f=[ not found');
}
