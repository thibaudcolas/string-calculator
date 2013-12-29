var StringCalculator = function () {

};

StringCalculator.prototype.add = function (numbers) {
  var operands = numbers.split(',');

  return operands.reduce(function (acc, cur) {
    return acc + Number(cur);
  }, 0);
};
