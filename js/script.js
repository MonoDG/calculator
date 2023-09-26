const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");
const btnNumbers = document.querySelectorAll(".btn-numbers button");
const btnClear = document.querySelector("#clear");
const btnAdd = document.querySelector("#add");
const btnSubstract = document.querySelector("#substract");
const btnMultiply = document.querySelector("#multiply");
const btnDivide = document.querySelector("#divide");
const btnEqual = document.querySelector("#equal");

let firstNumber = null;
let secondNumber = null;
let tempNumber = null;
let operator = "";
let displayedValue = "0";

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error Div by 0";
    }

    return a / b;
}

function operate(firstNumber, secondNumber, operator) {
    let result = null;
    switch (operator) {
        case "+": result = add(firstNumber, secondNumber); break;
        case "-": result = substract(firstNumber, secondNumber); break;
        case "*": result = multiply(firstNumber, secondNumber); break;
        case "/": result = divide(firstNumber, secondNumber); break;
    }
    let resultStr = result.toString();
    let resultLen = resultStr.length;
    let resultArr = resultStr.split(".");
    let resultIntPart = resultArr[0];


    if (resultIntPart.length > 10 || resultStr.includes("e") || (resultLen > 10 && resultIntPart === "0")) {
        return result.toExponential(4);
    }

    return round(result, 10 - resultIntPart.length);
}

function round(number, decimals) {
    const d = Math.pow(10, decimals);
    return Math.round((number + Number.EPSILON) * d) / d;
}

function clearValues() {
    displayedValue = "0";
    firstNumber = null;
    secondNumber = null;
    tempNumber = null;
    operator = "";
    display.textContent = displayedValue;
}

buttons.forEach(button => {
    button.addEventListener("mousedown", function () { this.classList.add("button-active") });
    button.addEventListener("mouseup", function () { this.classList.remove("button-active") });
});


btnNumbers.forEach(button => button.addEventListener("click", (e) => {
    if (displayedValue.length < 10) {
        if (displayedValue === "0") {
            displayedValue = e.target.textContent;
        } else {
            displayedValue += e.target.textContent;
        }
        display.textContent = displayedValue;
    }
    if (operator === "") {
        firstNumber = parseInt(displayedValue);
    } else {
        secondNumber = parseInt(displayedValue);
        tempNumber = secondNumber;
    }
}));

btnClear.addEventListener("click", clearValues);

btnAdd.addEventListener("click", () => {
    if (secondNumber !== null) {
        firstNumber = operate(firstNumber, secondNumber, operator);
        secondNumber = null;
        display.textContent = firstNumber;
    }
    operator = "+";
    displayedValue = "0";
});

btnSubstract.addEventListener("click", () => {
    if (secondNumber !== null) {
        firstNumber = operate(firstNumber, secondNumber, operator);
        secondNumber = null;
        display.textContent = firstNumber;
    }
    operator = "-";
    displayedValue = "0";
});

btnMultiply.addEventListener("click", () => {
    if (secondNumber !== null) {
        firstNumber = operate(firstNumber, secondNumber, operator);
        secondNumber = null;
        display.textContent = firstNumber;
    }
    operator = "*";
    displayedValue = "0";
});

btnDivide.addEventListener("click", () => {
    if (secondNumber !== null) {
        firstNumber = operate(firstNumber, secondNumber, operator);
        secondNumber = null;
        display.textContent = firstNumber;
    }
    operator = "/";
    displayedValue = "0";
});

btnEqual.addEventListener("click", () => {
    if (operator !== "") {
        if (secondNumber === null) {
            result = operate(firstNumber, tempNumber, operator);
            displayedValue = `${result}`;
            display.textContent = displayedValue;
            firstNumber = result;
            secondNumber = null;
        } else {
            result = operate(firstNumber, secondNumber, operator);
            displayedValue = `${result}`;
            display.textContent = displayedValue;
            firstNumber = result;
            tempNumber = secondNumber;
            secondNumber = null;
        }
    }
});