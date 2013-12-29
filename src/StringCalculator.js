var StringCalculator = function () {

};

// The add method, takes a string of numbers.
StringCalculator.prototype.add = function (numbers) {
  var operands;
  var negatives = '';
  var sum = 0;
  var delimiters = '\n|,';

  // If there are custom delimiters, process them.
  if (numbers.indexOf('//') === 0) {
    delimiters += '|' + numbers.substring(2, numbers.indexOf('\n'));
    numbers = numbers.substring(numbers.indexOf('\n'));
  }

  // Separate numbers using the delimiters.
  operands = numbers.split(new RegExp('(' + delimiters + ')'));

  // Calculates the sum of all the numbers.
  sum = operands.reduce(function (acc, num) {
    var num = Number(num);

    if (num < 0) negatives += ' ' + num;

    return acc + (num < 1000 ? num : 0);
  }, sum);

  // Negative numbers are reported.
  if (negatives.length > 0) {
    throw 'negatives not allowed' + negatives;
  }

  return sum;
};
