// console.log(arguments);

// See the template used by node
// console.log(require('module').wrapper);

// modules.exports
const Calculator1 = require('./test-module-1');
const Calc = new Calculator1();
console.log(`5 + 6 = ${Calc.add(5, 6)}`);

// Exports
// exports.multiply: no need to create instance
// const Calculator2 = require('./test-module-2');
// console.log(`5 * 6 = ${Calculator2.multiply(5, 6)}`);

// Power of destructing ES6 - no need to specify all functions
const { add, multiply, divide } = require('./test-module-2');
console.log(`5 * 6 = ${multiply(5, 6)}`);

// Caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
