const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");
const operatorButtons = document.querySelectorAll(".operator");

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, operator, num2) {
  return operator === "+"
    ? add(Number(num1), Number(num2))
    : operator === "-"
    ? subtract(num1, num2)
    : operator === "*"
    ? multiply(num1, num2)
    : operator === "/"
    ? divide(num1, num2)
    : console.log("!!!");
}

buttons.forEach((button) => {
  let displayValue;
  let num1 = [];
  let num2 = [];
  let operator;

  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.textContent === "+") {
        return (operator = "+");
      } else if (button.textContent === "-") {
        return (operator = "-");
      } else if (button.textContent === "*") {
        return (operator = "*");
      } else if (button.textContent === "/") {
        return (operator = "/");
      }
    });
  });

  button.addEventListener("click", () => {
    display.textContent += button.textContent;
    displayValue = display.textContent;

    if (button.textContent === "=") {
      let displayArray = displayValue
        .split("")
        .slice(0, -1)
        .join("")
        .split(operator);
      num1.push(displayArray[0]);
      num2.push(displayArray[1]);
      let finalNum1 = num1.toString();
      let finalNum2 = num2.toString();
      let result = operate(finalNum1, operator, finalNum2);
      display.textContent += result;
      displayValue = display.textContent;
    } else if (button.textContent === "C") {
      display.textContent = "";
      displayValue = display.textContent;
    }
  });
});
