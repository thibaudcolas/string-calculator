// Our Calculator object.
var StringCalculator = function () {};

// The add method, takes a string of numbers.
StringCalculator.prototype.add = function (numbers) {
  var operands;
  var negatives = '';
  var sum;
  var delimiters = '\n,';

  // If there are custom delimiters, process them.
  if (numbers.indexOf('//') === 0) {
    delimiters += numbers.substring(2, numbers.indexOf('\n'));
    numbers = numbers.substring(numbers.indexOf('\n'));
  }

  // Separate numbers using the delimiters.
  operands = numbers.split(new RegExp('[' + delimiters + ']'));

  // Calculates the sum of all the numbers.
  sum = operands.reduce(function (acc, cur) {
    if (Number(cur) < 0) {
      negatives += ' ' + cur;
    }
    return acc + Number(cur);
  }, 0);

  if (negatives.length > 0) {
    throw 'negatives not allowed' + negatives;
  }

  return sum;
};
