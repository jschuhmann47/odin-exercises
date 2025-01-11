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
    const trimmedResult = removeTrailingZeroes(result).toString();
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
            updateOperator(firstOperand, symbol, () => {});
        } else {
            updateOperator(secondOperand, symbol, operate);
        }
    }
    updateInputOnScreen();
}

function updateOperator(
    symbol: string,
    operand: number | string,
    updateFn: () => void
) {
    if (symbol === ".") {
        operand += symbol;
    } else {
        updateFn();
        operator = symbol.toString();
    }
}

function clearInput() {
    updateInputFn((input) => {
        firstOperand = "";
        operator = "";
        secondOperand = "";
        input.textContent = "0";
    });
}

function updateInputOnScreen() {
    updateInputFn((input) => {
        input.textContent = firstOperand + operator + secondOperand;
    });
}

function setInput(result: string) {
    updateInputFn((input) => {
        input.textContent = result;
    });
}

function resetOperands(result: string) {
    firstOperand = result;
    secondOperand = "";
    operator = "";
    updateInputOnScreen();
}

function isOperator(symbol: number | string) {
    return ["+", "-", "*", "/", "."].some((v) => symbol === v);
}

function isInteger(n: number) {
    return n % 1 == 0;
}

function removeTrailingZeroes(n: number, decimals = 8) {
    return parseFloat(n.toFixed(decimals));
}

function updateInputFn(fn: (input: HTMLElement) => void) {
    const input = document.getElementById("input");
    if (input !== null) {
        fn(input);
    }
}
