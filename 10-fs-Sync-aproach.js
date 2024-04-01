// const fs = require('fs');
const { readFileSync, writeFileSync } = require('fs');
console.log('Start');

const first = readFileSync('./content/1st.txt', 'utf-8');
const second = readFileSync('./content/2nd.txt', 'utf-8');

// console.log(first);
// console.log(second);

writeFileSync('./content/3rd.txt', `Hello World: ${first}, ${second}`, {flag: 'a'});
// fs.writeFileSync('./content/subFolder/txt1.txt', 'Sufiyan Ahmed Khan');
// console.log(txt1);

console.log('Done With Task');
console.log('Start the Next One');