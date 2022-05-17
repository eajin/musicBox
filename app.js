const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
  squared: function (a, b) {
    return a ** b;
  },
};
const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const mulResult = calculator.mul(minusResult, 10);
const divResult = calculator.div(mulResult, 10);
const squResult = calculator.squared(divResult, 10);

console.log(plusResult);
console.log(minusResult);
console.log(mulResult);
console.log(divResult);
console.log(squResult);
