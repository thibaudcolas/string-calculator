var StringCalculator = function () {
  this.defaultDelimiters = '\n|,';
  this.maximumNumber = 1000;
};

String.prototype.escapeRegExp = function () {
  return this.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

/*
 * Parses the string to return an array of operands.
 */
StringCalculator.prototype.parseNumbers = function (str) {
  var delimiters = this.defaultDelimiters;
  var customDelimiters;

  // If there are custom delimiters, process them.
  if (str.indexOf('//') === 0) {
    customDelimiters = str.substring(2, str.indexOf('\n'))

    if (customDelimiters.indexOf('[') === 0) {
      customDelimiters = customDelimiters.split('[').slice(1);
      delimiters += customDelimiters.reduce(function (acc, delim) {
        return acc += '|' + delim.substring(0, delim.length - 1).escapeRegExp();
      }, '');
    }
    else {
      delimiters += '|' + customDelimiters;
    }

    str = str.substring(str.indexOf('\n'));
  }

  return str.split(new RegExp('(' + delimiters + ')'));
}

/*
 * The add method, takes a string of numbers.
 */
StringCalculator.prototype.add = function (str) {
  var self = this;
  // Separate numbers using the delimiters.
  var operands = self.parseNumbers(str);
  var negatives = '';

  // Calculates the sum of all the numbers.
  var sum = operands.reduce(function (acc, num) {
    num = Number(num);

    if (num < 0) negatives += ' ' + num;

    return acc + (num < self.maximumNumber ? num : 0);
  }, 0);

  // Negative numbers are reported.
  if (negatives.length > 0) {
    throw 'negatives not allowed' + negatives;
  }

  return sum;
};
