var StringCalculator = function () {

};

StringCalculator.prototype.add = function (numbers) {
  var delimiters = '\n,';

  if (numbers.indexOf('//') === 0) {
    delimiters += numbers.substring(2, numbers.indexOf('\n'));
    numbers = numbers.substring(numbers.indexOf('\n'));
  }

  var operands = numbers.split(new RegExp('[' + delimiters + ']'));

  return operands.reduce(function (acc, cur) {
    return acc + Number(cur);
  }, 0);
};
