class Calculator {
  add = (a, b) => a + b;
  multiply = (a, b) => a * b;
  divide = (a, b) => a / b;
}

// Alternative
// module.exports = class {
//   add = (a, b) => a + b;
//   multiply = (a, b) => a * b;
//   divide = (a, b) => a / b;
// };

// Helpful for single export
module.exports = Calculator;
