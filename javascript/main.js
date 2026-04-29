let currentInput = "";
let previousInput = "";
let operator = "";

let justCalculated = false;

const expression = document.getElementById("expression");
const result = document.getElementById("result");

document
  .getElementById("one")
  .addEventListener("click", () => appendNumber("1"));
document
  .getElementById("two")
  .addEventListener("click", () => appendNumber("2"));
document
  .getElementById("three")
  .addEventListener("click", () => appendNumber("3"));
document
  .getElementById("four")
  .addEventListener("click", () => appendNumber("4"));
document
  .getElementById("five")
  .addEventListener("click", () => appendNumber("5"));
document
  .getElementById("six")
  .addEventListener("click", () => appendNumber("6"));
document
  .getElementById("seven")
  .addEventListener("click", () => appendNumber("7"));
document
  .getElementById("eight")
  .addEventListener("click", () => appendNumber("8"));
document
  .getElementById("nine")
  .addEventListener("click", () => appendNumber("9"));
document
  .getElementById("zero")
  .addEventListener("click", () => appendNumber("0"));

function appendNumber(num) {
    if(justCalculated){
        currentInput ="";
        justCalculated = false
    }
  currentInput += num;
  result.textContent = currentInput;
}

document
  .getElementById("add")
  .addEventListener("click", () => setOperator("+"));
document
  .getElementById("subtract")
  .addEventListener("click", () => setOperator("-"));
document
  .getElementById("multiply")
  .addEventListener("click", () => setOperator("*"));
document
  .getElementById("divide")
  .addEventListener("click", () => setOperator("/"));
  document
  .getElementById("percentage")
  .addEventListener("click", () => setOperator("%"));

function setOperator(op) {
  previousInput = currentInput;
  operator = op;
  expression.textContent = previousInput + " " + operator;
  currentInput = "";
}

document.getElementById("equal").addEventListener("click", () => {
  const a = parseFloat(previousInput);
  const b = parseFloat(currentInput);
  let answer;

  if (operator === "+") {
    answer = a + b;
  } else if (operator === "-") {
    answer = a - b;
  } else if (operator === "*") {
    answer = a * b;
  } else if (operator === "/") {
    if(b === 0){
        return
    }
    answer = a / b;
  } else if (operator === "%") {
    answer = a % b;
  }

  result.textContent = answer;
  expression.textContent = previousInput + " " + operator + " " + currentInput;
  justCalculated = true;

  currentInput = String(answer);
  previousInput = "";
  operator = "";
});
document.getElementById("clear").addEventListener("click", () => {
  expression.textContent = "";
  result.textContent = "";
  operator = "";
  currentInput = "";
  previousInput = ""
  justCalculated = false;
});

document.getElementById("backspace").addEventListener("click", () => {
   currentInput = currentInput.slice(0, -1);
   result.textContent = currentInput
});

document.getElementById("decimal_point").addEventListener("click", () => {
    if(currentInput.includes(".")){
        return
    }
    currentInput +="."
    result.textContent = currentInput
});