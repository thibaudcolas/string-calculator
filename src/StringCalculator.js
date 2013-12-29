var StringCalculator = function () {

};

StringCalculator.prototype.add = function (numbers) {
  var operands = numbers.split(',');
  if (operands.length === 1) {
    return +numbers;
  }
};
