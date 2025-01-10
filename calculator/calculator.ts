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

function operate() {
    let n1 = parseInt(firstOperand)
    let n2 = parseInt(secondOperand)
    let result: number
    switch (operator) {
        case '+':
            result = add(n1, n2)
            break
        case '-':
            result = subtract(n1, n2)
            break
        case '*':
            result = multiply(n1, n2)
            break
        case '/':
            result = divide(n1, n2)
            break
        default:
            throw new Error("invalid operator")
    }
    setInput(result.toString())
    resetOperands(result)
}



function pressKey(symbol: number | string){
    if (!isOperator(symbol)){
        if (operator === ''){
            firstOperand += symbol
            
        } else {
            secondOperand += symbol
        }
    } else {
        if (secondOperand === ''){
            operator = symbol.toString()
        } else {
            operate()
            operator = symbol.toString()
        }
    }
    updateInput()
}

function pressOperand(operation: string) {
    operator = operation
}

function clearInput(){
    const input = document.getElementById("input")
    if (input !== null) {
        firstOperand = ''
        operator = ''
        secondOperand = ''
        input.textContent = ''
    }
}

function updateInput(){
    const input = document.getElementById("input")
    if (input !== null) {
        input.textContent = firstOperand + operator + secondOperand
    }
}

function setInput(result: string){
    const input = document.getElementById("input")
    if (input !== null) {
        input.textContent = result
    }
}

function resetOperands(result: number){
    firstOperand = result.toString()
    secondOperand = ''
    operator = ''
    updateInput()
}

function isOperator(symbol: number | string) {
    return ['+','-','*','/'].some((v) => symbol === v)
}
