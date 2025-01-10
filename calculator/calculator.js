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
function operate(n1, n2, operator) {
    switch (operator) {
        case '+':
            return add(n1, n2);
        case '-':
            return subtract(n1, n2);
        case '*':
            return multiply(n1, n2);
        case '/':
            return divide(n1, n2);
    }
    throw new Error("invalid operator");
}
function pressKey(symbol) {
    var input = document.getElementById("input");
    firstOperand += symbol;
    if (input !== null) {
        input.textContent = firstOperand + operator + secondOperand;
    }
}
function pressOperand(operation) {
    operator = operation;
}
function clearInput() {
    var input = document.getElementById("input");
    if (input !== null) {
        input.textContent = '';
    }
}
