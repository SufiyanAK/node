const path = require('path');

// console.log(path);

console.log(path.sep);

const filePath = path.join('./content', 'subFolder', 'file.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const result = path.resolve(__dirname, 'content', 'subFolder', 'file.txt');
console.log(result);