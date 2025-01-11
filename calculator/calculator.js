"use strict";
var firstOperand = "", secondOperand = "";
var operator = "";
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
        throw new Error("Cannot divide by zero!");
    }
    return n1 / n2;
}
function operate() {
    if (firstOperand == "" || secondOperand == "" || operator == "") {
        return;
    }
    var n1 = parseFloat(firstOperand);
    var n2 = parseFloat(secondOperand);
    var result;
    switch (operator) {
        case "+":
            result = add(n1, n2);
            break;
        case "-":
            result = subtract(n1, n2);
            break;
        case "*":
            result = multiply(n1, n2);
            break;
        case "/":
            try {
                result = divide(n1, n2);
                break;
            }
            catch (error) {
                alert(error.message);
                return;
            }
        default:
            throw new Error("invalid operator");
    }
    var trimmedResult = removeTrailingZeroes(result).toString();
    setInput(trimmedResult);
    resetOperands(trimmedResult);
}
function pressKey(symbol) {
    if (!isOperator(symbol)) {
        if (operator === "") {
            firstOperand += symbol;
        }
        else {
            secondOperand += symbol;
        }
    }
    else {
        if (secondOperand === "") {
            // maybe save global state as object instead of doing this
            updateOperator(function (newValue) { return firstOperand += newValue; }, symbol, function () { });
        }
        else {
            updateOperator(function (newValue) { return secondOperand += newValue; }, symbol, operate);
        }
    }
    updateInputOnScreen();
}
function updateOperator(updateOperandFn, symbol, updateResultFn) {
    if (symbol === ".") {
        updateOperandFn(symbol);
    }
    else {
        updateResultFn();
        operator = symbol.toString();
    }
}
function clearInput() {
    updateInputFn(function (input) {
        firstOperand = "";
        operator = "";
        secondOperand = "";
        input.textContent = "0";
    });
}
function updateInputOnScreen() {
    updateInputFn(function (input) {
        input.textContent = firstOperand + operator + secondOperand;
    });
}
function setInput(result) {
    updateInputFn(function (input) {
        input.textContent = result;
    });
}
function resetOperands(result) {
    firstOperand = result;
    secondOperand = "";
    operator = "";
    updateInputOnScreen();
}
function isOperator(symbol) {
    return ["+", "-", "*", "/", "."].some(function (v) { return symbol === v; });
}
function isInteger(n) {
    return n % 1 == 0;
}
function removeTrailingZeroes(n, decimals) {
    if (decimals === void 0) { decimals = 8; }
    return parseFloat(n.toFixed(decimals));
}
function updateInputFn(fn) {
    var input = document.getElementById("input");
    if (input !== null) {
        fn(input);
    }
}
