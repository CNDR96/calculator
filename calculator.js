let operator = "";
let num1 = null;
let num2 = null;
let displayValue = null

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
        operator = button.getAttribute('data-op');
        num1 = parseFloat(displayValue); 
});

document.querySelector('.clear').addEventListener('click', () => {
    displayValue = "";
    num1 = null;
    operator = "";
    display.value = ""; // Clear the display
});

document.querySelector('.equals').addEventListener('click', () => {
    const num2 = parseFloat(displayValue); // Get second number
    const result = operate(num1, num2, operator); // Perform calculation
    display.value = result; // Show result
    displayValue = ""; // Reset displayValue for next calculation
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