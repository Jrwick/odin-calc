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
const topDisplay = document.querySelector(".total-inputs");

function populateTopDisplay() {
  topDisplay.innerText = `${leftOperand} ${operator} ${rightOperand}`;
}

function operate(leftOperand, rightOperand, operator) {
  switch (operator) {
    case "+":
      return add(leftOperand, rightOperand);
    case "-":
      return subtract(leftOperand, rightOperand);
    case "x":
      return multiply(leftOperand, rightOperand);
    case "/":
      return divide(leftOperand, rightOperand);
    default:
      return leftOperand || rightOperand;
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
  if (operator) {
    equalsHandler();
  }
  operator = e.target.innerText;
}

const operatorKeys = document.querySelectorAll(".operator");
operatorKeys.forEach((key) => {
  key.addEventListener("click", operatorHandler);
});

function clearVariables() {
  rightOperand = null;
  leftOperand = null;
  operator = null;
}

function equalsHandler() {
  console.log(`Left: ${leftOperand}`);
  console.log(operator);
  console.log(`Right: ${rightOperand}`);
  if (leftOperand && rightOperand) {
    populateTopDisplay();
    leftOperand = operate(Number(leftOperand), Number(rightOperand), operator);
    currentOutputDisplay.innerText = leftOperand;
  }
  if (rightOperand) {
    rightOperand = null;
  }
}

const equals = document.querySelector(".equals");
equals.addEventListener("click", equalsHandler);

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  clearVariables();
  currentOutputDisplay.innerText = 0;
  topDisplay.innerText = "";
});
