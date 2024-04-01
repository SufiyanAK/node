// npm - global command, jo node k sath aati hen
// version check krny k liye - npm --v or npm --version

// local dependencies - use it only in this particular project
// npm i <package ka name>

// global dependencies - use it in any project
// npm i -g <package ka name>
// sudo npm i -g <package ka name> - MAC

// package.json - manifest file (stores inportant info about project/package)
// manual approach ( create package.json in the root, create properties etc )
// npm init ( step by step, press enter to skip )
// npm init -y ( every thing default )

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);