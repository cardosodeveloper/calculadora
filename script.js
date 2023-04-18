let calculation = '';

function addToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value;
  calculation += value;
}

function calculate() {
  const display = document.getElementById('display');
  const result = eval(calculation);
  display.value = result;
  calculation = result.toString();
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
  calculation = '';
}
