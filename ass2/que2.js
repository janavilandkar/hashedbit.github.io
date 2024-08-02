
//Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculate(num1, num2, operation) {
    let res;
    switch (operation) {
        case 'Addition':
            res = num1 + num2;
            break;
        case 'Subtract':
            res = num1 - num2;
            break;
        case 'Multiply':
            res = num1 * num2;
            break;
        case 'Divide':
            if (num2 === 0) {
                return 'Error: Division by zero is not allowed';
            }
            res = num1 / num2;
            break;
        default:
            return 'Error: Invalid operation';
    }
    return res;
}
console.log(calculate(20, 9, 'Addition')); 
console.log(calculate(60, 4, 'Subtract')); 
console.log(calculate(30, 2, 'Multiply'));
console.log(calculate(20, 5, 'Divide'));

