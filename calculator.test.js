const Calculator = require('./calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test('Addition works correctly', () => {
    expect(calc.add(5, 3)).toBe(8);
    expect(calc.add(-1, 1)).toBe(0);
  });

  test('Subtraction works correctly', () => {
    expect(calc.subtract(10, 4)).toBe(6);
    expect(calc.subtract(0, 5)).toBe(-5);
  });

  test('Multiplication works correctly', () => {
    expect(calc.multiply(3, 4)).toBe(12);
    expect(calc.multiply(-2, 5)).toBe(-10);
  });

  test('Division works correctly', () => {
    expect(calc.divide(10, 2)).toBe(5);
    expect(calc.divide(9, 3)).toBe(3);
  });

  test('Division by zero throws error', () => {
    expect(() => calc.divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
