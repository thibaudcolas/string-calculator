var StringCalculator = function () {

};

StringCalculator.prototype.add = function (numbers) {
  var operands = numbers.split(',');
  if (operands.length === 1) {
    return +numbers;
  }
  else if (operands.length === 2) {
    return (+operands[0]) + (+operands[1]);
  }
};
