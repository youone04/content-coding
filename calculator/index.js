let currentValue = '';
let operator = '';
let result = 0;

function addValue(value) {
  currentValue += value;
  updateScreen(currentValue);
}

function addOperator(newOperator) {
  operator = newOperator;
  result = parseFloat(currentValue);
  currentValue = '';
}

function calculate() {
  let secondValue = parseFloat(currentValue);
  if (operator === '+') {
    result += secondValue;
  } else if (operator === '-') {
    result -= secondValue;
  } else if (operator === '*') {
    result *= secondValue;
  } else if (operator === '/') {
    result /= secondValue;
  }
  updateScreen(result);
  currentValue = '';
}

function clearScreen() {
  currentValue = '';
  operator = '';
  result = 0;
  updateScreen('');
}

function updateScreen(value) {
  document.querySelector('.screen').textContent = value;
}
