const display = document.getElementById('display');

let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function chooseOperation(op) {
    if (currentInput === '') return;
    if (firstOperand !== null) {
        calculate();
    }
    operator = op;
    firstOperand = parseFloat(currentInput);
    currentInput = '';
    updateDisplay();
}

function calculate() {
    let secondOperand = parseFloat(currentInput);
    if (isNaN(firstOperand) || isNaN(secondOperand)) return;
    let result;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        case '^':
            result = Math.pow(firstOperand, secondOperand);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function calculateSquareRoot() {
    if (currentInput === '') return;
    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    updateDisplay();
}

function calculateFactorial() {
    if (currentInput === '') return;
    let number = parseInt(currentInput);
    if (number < 0) return;
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    currentInput = result.toString();
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput || '0';
    if (operator) {
        display.textContent = `${firstOperand} ${operator} ${currentInput}`;
    }
}