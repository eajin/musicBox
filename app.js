const calculator = {
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  mul: function (a, b) {
    console.log(a * b);
  },
  div: function (a, b) {
    console.log(a / b);
  },
  squared: function (a, b) {
    console.log(a ** b);
  },
};
calculator.plus(52, 34);
calculator.minus(30, 50);
calculator.mul(30, 20);
calculator.div(34, 4);
calculator.squared(6, 3);
