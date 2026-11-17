const fs = require('fs');
const content = fs.readFileSync('fanout_main.js', 'utf8');

const regex = /\/api\/[a-zA-Z0-9_\-\/]+/g;
const apis = new Set(content.match(regex) || []);
console.log('API routes referenced in main:', Array.from(apis));
