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
  if (num2 == 0) {
    return "Error";
  } else {
    return num1 / num2;
  }
}

let leftOperand;
let rightOperand;
let operator;

function operate(leftOperand, rightOperand, operator) {
  switch (operator) {
    case "add":
      return add(leftOperand, rightOperand);
    case "subtract":
      return subtract(leftOperand, rightOperand);
    case "multiply":
      return multiply(leftOperand, rightOperand);
    case "divide":
      return divide(leftOperand, rightOperand);
    default:
      return "Invalid operator";
  }
}
