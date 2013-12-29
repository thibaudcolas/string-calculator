/*
 * The Calculator object.
 */
var StringCalculator = function () {
  this.defaultDelimiters = '\n|,';
};

/*
 * Useful when dynamically generating regular expressions.
 */
String.prototype.escapeRegExp = function () {
  return this.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
};

StringCalculator.prototype._parseDelimiters = function (custom) {
  var delimiters = '|' + custom;

  // Override default value if we are in a multiple-delimiter case.
  if (custom.indexOf('[') === 0) {
    custom = custom.split('[').slice(1);
    // Retrieve all delimiters and add them to the regex.
    delimiters = custom.reduce(function (acc, d) {
      return acc += '|' + d.substring(0, d.length - 1).escapeRegExp();
    }, '');
  }

  return delimiters;
};

/*
 * Parses the string to return an array of operands.
 */
StringCalculator.prototype._parseNumbers = function (str) {
  var delimiters = this.defaultDelimiters;

  // If there are custom delimiters, process them.
  if (str.indexOf('//') === 0) {
    delimiters += this._parseDelimiters(str.substring(2, str.indexOf('\n')));
    str = str.substring(str.indexOf('\n'));
  }

  return str.split(new RegExp('(' + delimiters + ')'));
};

/*
 * The add method, takes a string of numbers.
 */
StringCalculator.prototype.add = function (numbers) {
  // Separate numbers using the delimiters.
  var operands = this._parseNumbers(numbers);
  var negatives = '';

  // Calculates the sum of all the numbers.
  var sum = operands.reduce(function (acc, num) {
    num = Number(num);

    if (num < 0) {
      negatives += ' ' + num;
    }

    return acc + (num < 1000 ? num : 0);
  }, 0);

  // Negative numbers are reported.
  if (negatives.length > 0) {
    throw 'negatives not allowed' + negatives;
  }

  return sum;
};
