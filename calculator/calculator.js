"use strict";
var firstOperand = '', secondOperand = '';
var operator = '';
function add(n1, n2) {
    return n1 + n2;
}
function subtract(n1, n2) {
    return n1 - n2;
}
function multiply(n1, n2) {
    return n1 * n2;
}
function divide(n1, n2) {
    if (n2 == 0) {
        throw new Error("cannot divide by zero");
    }
    return n1 / n2;
}
function operate() {
    var n1 = parseInt(firstOperand);
    var n2 = parseInt(secondOperand);
    var result;
    switch (operator) {
        case '+':
            result = add(n1, n2);
            break;
        case '-':
            result = subtract(n1, n2);
            break;
        case '*':
            result = multiply(n1, n2);
            break;
        case '/':
            result = divide(n1, n2);
            break;
        default:
            throw new Error("invalid operator");
    }
    setInput(result.toString());
    resetOperands(result);
}
function pressKey(symbol) {
    if (!isOperator(symbol)) {
        if (operator === '') {
            firstOperand += symbol;
        }
        else {
            secondOperand += symbol;
        }
    }
    else {
        if (secondOperand === '') {
            operator = symbol.toString();
        }
        else {
            operate();
            operator = symbol.toString();
        }
    }
    updateInput();
}
function pressOperand(operation) {
    operator = operation;
}
function clearInput() {
    var input = document.getElementById("input");
    if (input !== null) {
        firstOperand = '';
        operator = '';
        secondOperand = '';
        input.textContent = '';
    }
}
function updateInput() {
    var input = document.getElementById("input");
    if (input !== null) {
        input.textContent = firstOperand + operator + secondOperand;
    }
}
function setInput(result) {
    var input = document.getElementById("input");
    if (input !== null) {
        input.textContent = result;
    }
}
function resetOperands(result) {
    firstOperand = result.toString();
    secondOperand = '';
    operator = '';
    updateInput();
}
function isOperator(symbol) {
    return ['+', '-', '*', '/'].some(function (v) { return symbol === v; });
}
