describe('String Calculator', function () {
  var calc;

  beforeEach(function() {
    calc = new StringCalculator();
  });

  it('handles empty addition', function () {
    expect(calc.add('')).toEqual(0);
  });

  it('handles unary addition', function () {
    expect(calc.add('133')).toEqual(133);
    expect(calc.add('1')).toEqual(1);
  });

  it('handles binary addition', function () {
    expect(calc.add('133,36')).toEqual(169);
    expect(calc.add('1,2')).toEqual(3);
  });

  it('handles addition w/ an infinite number of operands', function () {
    expect(calc.add('133,36,1,3,5')).toEqual(178);
    expect(calc.add('1,2,90,100,1000,10000,100000')).toEqual(111193);
  });

  it('supports number strings delimited w/ newlines', function () {
    expect(calc.add('133\n36,1,3,5')).toEqual(178);
    expect(calc.add('1\n2\n90\n100\n1000\n10000\n100000')).toEqual(111193);
  });

  it('dynamically changes the delimiter', function () {
    expect(calc.add('//;\n' + '133\n36,1,3;5')).toEqual(178);
    expect(calc.add('//!\n' + '1!2!90!100!1000!10000!100000')).toEqual(111193);
  });

  it('does not like negative numbers', function () {
    expect(function() {
      calc.add('-41,50');
    }).toThrow('negatives not allowed -41');

    expect(function() {
      calc.add('-41,50,-20,-30');
    }).toThrow('negatives not allowed -41 -20 -30');
  });
});
