// CommonJS, every file is mudule by default
// Modules - Encapsulated code only share minimum
const name = require('./04-name')
const sayHi = require('./05-utils')
const data = require('./06-alternative-module-way')
require('./07-mind-grenade')

sayHi("Noman")
sayHi(name.sufiyan)
console.log(data)
sayHi(faizan)

console.log(name);