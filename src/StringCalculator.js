// Our Calculator object.
var StringCalculator = function () {};

// The add method, takes a string of numbers.
StringCalculator.prototype.add = function (numbers) {
  var operands;
  var delimiters = '\n,';

  // If there are custom delimiters, process them.
  if (numbers.indexOf('//') === 0) {
    delimiters += numbers.substring(2, numbers.indexOf('\n'));
    numbers = numbers.substring(numbers.indexOf('\n'));
  }

  // Separate numbers using the delimiters.
  operands = numbers.split(new RegExp('[' + delimiters + ']'));

  // Returns the sum of all the numbers.
  return operands.reduce(function (acc, cur) {
    return acc + Number(cur);
  }, 0);
};
