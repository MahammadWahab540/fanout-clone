const fs = require('fs');
const code = fs.readFileSync('fanout_brand.js', 'utf8');

// Find SVG elements or path strings
const paths = code.match(/d:\s*["'`][^"'`]+["'`]/g) || [];
console.log('Found paths:', paths.length);
paths.slice(0, 10).forEach(p => console.log(p));

const viewBox = code.match(/viewBox:\s*["'`][^"'`]+["'`]/g) || [];
console.log('viewBox:', viewBox);
