
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalButton = document.querySelector('[data-equal]');
const equation = document.querySelector('#equation');
const result = document.querySelector('#result');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');

let firstOperand = 0
let secondOperand = 0
let operator = ''

add = (number_1, number_2) => {
    return number_1 + number_2;
}

subtract = (number_1, number_2) => {
    return number_1 + number_2;
}

multiply = (number_1, number_2) => {
    return number_1 * number_2;
}

divide = (number_1, number_2) => {
    return number_1 / number_2;
}

operate = (operator, number_1, number_2) => {
    switch (operator){
        case '+':
            return add(number_1, number_2);
            break;
        case '-':
            return subtract(number_1, number_2);
            break;
        case '*':
            return multiply(number_1, number_2);
            break;
        case '/':
            return divide(number_1, number_2);
            break;
    }
}

display = () => {

}

numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => { 
        if (result.textContent == '0') result.textContent = '';
        result.textContent += button.textContent;
        console.log(button.textContent);
    })
})

clearButton.addEventListener('click', (e)=>{
    equation.textContent = '';
    result.textContent = 0;
})

deleteButton.addEventListener('click', (e)=>{
    result.textContent = result.textContent.substr(0, result.textContent.length - 1);
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        operator = button.textContent;
        firstOperand = Number(result.textContent);
        equation.textContent = firstOperand + ' ' + operator;
        result.textContent = ''
    })
})

equalButton.addEventListener('click', (e) => {
    
    secondOperand = Number(result.textContent);
    console.log(secondOperand);
    //if (secondOperand = )

    equation.textContent = firstOperand + operator + secondOperand;
    result.textContent = operate(operator, firstOperand, secondOperand);
    operator = null;
})