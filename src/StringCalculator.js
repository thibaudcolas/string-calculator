var StringCalculator = function () {

};

StringCalculator.prototype.add = function (numbers) {
  var delimiters;
  if (numbers.indexOf('//') === 0) {
    delimiters = '[\n,' + ';!\)' + ']';

    numbers = numbers.substring(numbers.indexOf('\n'));
  }
  else {
    delimiters = '[\n,' + ';!\)' + ']';
  }

  var operands = numbers.split(new RegExp(delimiters));

  return operands.reduce(function (acc, cur) {
    return acc + Number(cur);
  }, 0);
};
