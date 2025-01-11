var firstOperand = "",
    secondOperand = "";
var operator = "";

function add(n1: number, n2: number) {
    return n1 + n2;
}
function subtract(n1: number, n2: number) {
    return n1 - n2;
}
function multiply(n1: number, n2: number) {
    return n1 * n2;
}
function divide(n1: number, n2: number) {
    if (n2 == 0) {
        throw new Error("Cannot divide by zero!");
    }
    return n1 / n2;
}

function operate() {
    if (firstOperand == "" || secondOperand == "" || operator == "") {
        return;
    }
    let n1 = parseFloat(firstOperand);
    let n2 = parseFloat(secondOperand);
    let result: number;
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
            } catch (error: any) {
                alert(error.message);
                return;
            }
        default:
            throw new Error("invalid operator");
    }
    const trimmedResult = isInteger(result)
        ? result.toString()
        : result.toFixed(8);
    setInput(trimmedResult);
    resetOperands(trimmedResult);
}

function pressKey(symbol: number | string) {
    if (!isOperator(symbol)) {
        if (operator === "") {
            firstOperand += symbol;
        } else {
            secondOperand += symbol;
        }
    } else {
        if (secondOperand === "") {
            operator = symbol.toString();
        } else {
            operate();
            operator = symbol.toString();
        }
    }
    updateInput();
}

function pressOperand(operation: string) {
    operator = operation;
}

function clearInput() {
    const input = document.getElementById("input");
    if (input !== null) {
        firstOperand = "";
        operator = "";
        secondOperand = "";
        input.textContent = "0";
    }
}

function updateInput() {
    const input = document.getElementById("input");
    if (input !== null) {
        input.textContent = firstOperand + operator + secondOperand;
    }
}

function setInput(result: string) {
    const input = document.getElementById("input");
    if (input !== null) {
        input.textContent = result;
    }
}

function resetOperands(result: string) {
    firstOperand = result;
    secondOperand = "";
    operator = "";
    updateInput();
}

function isOperator(symbol: number | string) {
    return ["+", "-", "*", "/"].some((v) => symbol === v);
}

function isInteger(n: number) {
    return n % 1 == 0;
}
