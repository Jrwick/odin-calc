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

function OperandHandler(e) {
  let number = e.target.innerText;
  if (!operator) {
    if (!leftOperand) {
      leftOperand = number;
    } else {
      leftOperand += number;
    }
    currentOutputDisplay.innerText = leftOperand;
  } else {
    if (!rightOperand) {
      rightOperand = number;
    } else {
      rightOperand += number;
    }
    currentOutputDisplay.innerText = rightOperand;
  }
}

const currentOutputDisplay = document.querySelector(".current-output");
const numberKeys = document.querySelectorAll(".number");
numberKeys.forEach((key) => {
  key.addEventListener("click", OperandHandler);
});

function operatorHandler(e) {
  operator = e.target.innerText;
  currentOutputDisplay.innerText = operator;
}

const operatorKeys = document.querySelectorAll(".operator");
operatorKeys.forEach((key) => {
  key.addEventListener("click", operatorHandler);
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
  console.log(`Left: ${leftOperand}`);
  console.log(operator);
  console.log(`Right: ${rightOperand}`);
});
