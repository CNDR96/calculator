let operator = '';
let num1 = null;
let num2 = null;
let displayValue = '';
const display = document.getElementById('calculator-display');

const digitButtons = document.querySelectorAll('.digit');
    digitButtons.forEach(button => {
        button.addEventListener('click', () => {
            displayValue += button.textContent;
            display.value = displayValue;
    });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (displayValue !== '') {
            num1 = parseFloat(displayValue); 
        }
        operator = button.getAttribute('data-op');        
        displayValue = '';
        display.value = num1;
        });
});


document.querySelector('.clear').addEventListener('click', () => {
    displayValue = '';
    num1 = null;
    operator = '';
    display.value = '';
});

document.querySelector('.equals').addEventListener('click', () => {
    const num2 = parseFloat(displayValue); 
    const result = operate(num1, num2, operator);
    display.value = result;
    num1 = result;
    displayValue = '';
});


function operate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case '*':
            return num1 * num2;
        default: 
            throw new Error('unsupportedOperator');
    }
}