var firstOperand = '', secondOperand = ''
var operator = ''


function add(n1: number, n2: number) {
    return n1 + n2
}
function subtract(n1: number, n2: number) {
    return n1 - n2
}
function multiply(n1: number, n2: number) {
    return n1 * n2
}
function divide(n1: number, n2: number) {
    if (n2 == 0) {
        throw new Error("cannot divide by zero")
    }
    return n1 / n2
}

function operate(n1: number, n2: number, operator: string) {
    switch (operator) {
        case '+':
            return add(n1, n2)
        case '-':
            return subtract(n1, n2)
        case '*':
            return multiply(n1, n2)
        case '/':
            return divide(n1, n2)
    }
    throw new Error("invalid operator")
}

function pressKey(symbol: number | string){
    const input = document.getElementById("input")
    firstOperand += symbol
    if (input !== null) {
        input.textContent = firstOperand + operator + secondOperand
    }
}

function pressOperand(operation: string) {
    operator = operation
}

function clear(){
    const input = document.getElementById("input")
    if (input !== null) {
        input.textContent = ''
    }
}
