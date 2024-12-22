const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};
let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn-clear");
let equal = document.querySelector(".btn-equal");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let value = e.target.dataset.num;

    if (value !== undefined) {
      screen.value += value;
    }
  });
});

const operate = function (number1, operator, number2) {
  switch (operator) {
    case "+":
      return add(number1, number2);
    case "-":
      return subtract(number1, number2);
    case "*":
      return multiply(number1, number2);
    case "/":
      return divide(number1, number2);
  }
};

equal.addEventListener("click", function () {
  if (screen.value === "") {
    screen.value = "Please enter a value";
  } else {
    let value = screen.value;
    let operator;
    if (value.includes("+")) {
      operator = "+";
    } else if (value.includes("-")) {
      operator = "-";
    } else if (value.includes("*")) {
      operator = "*";
    } else if (value.includes("/")) {
      operator = "/";
    }

    let numbers = value.split(operator);

    if (numbers.length != 2 || operator === undefined) {
      screen.value = "Please enter a valid expression";
      return;
    } else {
      let number1 = parseFloat(numbers[0]);
      let number2 = parseFloat(numbers[1]);
      screen.value = operate(number1, operator, number2);
    }
  }
});

clear.addEventListener("click", function () {
  screen.value = "";
});
