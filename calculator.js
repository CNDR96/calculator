const operator = "";
const num1 = undefined;
const num2 = undefined;

function calculate(num1, num2, operator) {
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