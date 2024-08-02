function findTax(salary) {
    let tax;
    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.20;
            break;
        case (salary > 1500000):
            tax = salary * 0.30;
            break;
        default:
            return 'Error: Invalid salary amount';
    }
    
    return tax;
}
console.log(findTax(300000));  
console.log(findTax(700000));  
console.log(findTax(1300000)); 
console.log(findTax(8000000)); 
console.log(findTax(-50));

