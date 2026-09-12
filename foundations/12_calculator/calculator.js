const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(array) {
  return array.reduce((sum, number) => sum + number, 0);
};

const multiply = function(array) {
  return array.reduce((total, number) => total * number);
};

const power = function(num, exp) {
  return num ** exp;
};

const factorial = function(x) {
  let total = 1;
  for (let i = x; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
