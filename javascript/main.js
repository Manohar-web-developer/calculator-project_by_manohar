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

document.addEventListener("keydown", (e) => {
  if (e.key === "1") appendNumber("1");
  if (e.key === "2") appendNumber("2");
  if (e.key === "3") appendNumber("3");
  if (e.key === "4") appendNumber("4");
  if (e.key === "5") appendNumber("5");
  if (e.key === "6") appendNumber("6");
  if (e.key === "7") appendNumber("7");
  if (e.key === "8") appendNumber("8");
  if (e.key === "9") appendNumber("9");
  if (e.key === "0") appendNumber("0");
});

function appendNumber(num) {
  if (justCalculated) {
    currentInput = "";
    justCalculated = false;
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

document.addEventListener("keydown", (e) => {
  if (e.key === "+") setOperator("+");
  if (e.key === "-") setOperator("-");
  if (e.key === "*") setOperator("*");
  if (e.key === "/") setOperator("/");
  if (e.key === "%") setOperator("%");
});

function setOperator(op) {
  if (currentInput === "") {
    operator = op;
    expression.textContent = previousInput + " " + operator;
    return;
  }

  if (previousInput !== "" && currentInput !== "") {
    const answer = calculate();
    if (answer === null) return;
    result.textContent = answer;
    currentInput = String(answer);
    previousInput = "";
    operator = "";
  }
  previousInput = currentInput;
  operator = op;
  expression.textContent = previousInput + " " + operator;
  currentInput = "";
  justCalculated = false;
}

document.getElementById("equal").addEventListener("click", () => {
  performCalculation();
});
addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === "=") {
    performCalculation();
  }
});
function performCalculation() {
  if (previousInput === "" || currentInput === "" || operator === "") return;

  const answer = calculate();
  if (answer === null) return;

  result.textContent = answer;
  expression.textContent = previousInput + " " + operator + " " + currentInput;
  currentInput = String(answer);
  previousInput = "";
  operator = "";
  justCalculated = true;
}
document.getElementById("clear").addEventListener("click", clearAll);
addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    clearAll();
  }
});
function clearAll() {
  expression.textContent = "";
  result.textContent = "";
  operator = "";
  currentInput = "";
  previousInput = "";
  justCalculated = false;
}

document
  .getElementById("backspace")
  .addEventListener("click", removeLastCharacter);
addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    removeLastCharacter();
  }
});

function removeLastCharacter() {
  currentInput = currentInput.slice(0, -1);
  result.textContent = currentInput;
}

document.getElementById("decimal_point").addEventListener("click", () => {
  appendDecimal();
});
addEventListener("keydown", (e) => {
    if (e.key === ".") {
        appendDecimal();
    }
});
function appendDecimal() {
    if (currentInput.includes(".")) {
    return;
  }
  currentInput += ".";
  result.textContent = currentInput;
}

function calculate() {
  const a = parseFloat(previousInput);
  const b = parseFloat(currentInput);
  let answer;

  if (operator === "+") answer = a + b;
  else if (operator === "-") answer = a - b;
  else if (operator === "*") answer = a * b;
  else if (operator === "/") {
    if (b === 0) {
      result.textContent = "Error";
      return null;
    }
    answer = a / b;
  } else if (operator === "%") answer = a % b;

  return answer;
}
document.getElementById("equal").addEventListener("dblclick", () => {
  currentInput = currentInput * 2;
  result.textContent = currentInput;
});

document.addEventListener("keydown", (e) => {
  console.log(e.key);
});
