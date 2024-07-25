let num1;
let num2;
let operator;

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
    : "fag";
}

console.log(operate(num1, operator, num2));
