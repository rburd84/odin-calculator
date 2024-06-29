const container = document.querySelector(".container");
const display = document.getElementById("screen");
let disResult = "";
const logEntries = [];
let number1;
let number2;
let opera;

// Click event for number buttons
document.querySelectorAll(".numbers").forEach((num) => {
  num.addEventListener("click", function (e) {
    disResult += e.target.textContent;
    display.innerHTML = disResult;
  });
});

// Click event for operator buttons
document.querySelectorAll(".operator").forEach((operator) => {
  operator.addEventListener("click", function (e) {
    if (!number1) {
      number1 = parseInt(display.innerHTML);
      disResult = "";
      opera = e.target.textContent;
    } else {
      const results = new tracker(opera, number1, parseInt(display.innerHTML));
      opera = e.target.textContent;

      number1 = results.result;
      display.innerHTML = results.result;
      disResult = "";

      logEntries.push(results);
      console.log(logEntries);
    }
  });
});

// Equal button click
document.getElementById("equal").addEventListener("click", function () {
  console.log("equal click");
  const results = new tracker(opera, number1, parseInt(display.innerHTML));

  number1 = results.result;
  display.innerHTML = results.result;
  disResult = "";

  logEntries.push(results);
  console.log(logEntries);
});

// Constructor Function
function tracker(operator, num1, num2) {
  this.operator = operator;
  this.num1 = num1;
  this.num2 = num2;

  this.result = operate(this.operator, this.num1, this.num2);
}

// Calculator function for math operations
const Calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;

  return { add, sub, mul, div };
})();

// Function to perform math operation
function operate(operator, num1, num2) {
  if (operator === "+") {
    return Calculator.add(num1, num2);
  } else if (operator === "-") {
    return Calculator.sub(num1, num2);
  } else if (operator === "X") {
    return Calculator.mul(num1, num2);
  } else if (operator === "/") {
    return Calculator.div(num1, num2);
  }
}

document.getElementById("clear").addEventListener("click", function () {
  display.innerHTML = "";
  number1 = "";
});
