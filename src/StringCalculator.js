var StringCalculator = function () {

};

StringCalculator.prototype.add = function (numbers) {
  if (numbers === '') {
    return 0;
  }

  var operands = numbers.split(',');
  if (operands.length === 1) {
    return +numbers;
  }
};
