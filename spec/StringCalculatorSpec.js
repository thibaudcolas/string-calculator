describe("String Calculator", function() {
  var calc;

  beforeEach(function() {
    calc = new StringCalculator();
  });

  it("handles empty addition", function() {
    expect(calc.add('')).toEqual(0);
  });
});
