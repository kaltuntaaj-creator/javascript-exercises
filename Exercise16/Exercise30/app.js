
function operate(num1, num2, callback) {
    return callback(num1, num2);
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

const multiplicationResult = operate(10, 5, multiply);
console.log("Multiplication Result:", multiplicationResult);

const divisionResult = operate(20, 4, divide);
console.log("Division Result:", divisionResult);