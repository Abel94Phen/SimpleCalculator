class Calculator {
  // Addition
  add(a, b) {
    return a + b;
  }

  // Subtraction
  subtract(a, b) {
    return a - b;
  }

  // Multiplication
  multiply(a, b) {
    return a * b;
  }

  // Division
  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

module.exports = Calculator;
