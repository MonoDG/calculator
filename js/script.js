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
    return result;
}

function clearValues() {
    displayedValue = "0";
    firstNumber = null;
    secondNumber = null;
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
    operator = "+";
    if (secondNumber !== null) {
        firstNumber = operate(firstNumber, secondNumber, operator);
        secondNumber = null;
        display.textContent = firstNumber;
    }
    displayedValue = "0";
});

btnSubstract.addEventListener("click", () => {
    operator = "-";
    displayedValue = "0";
});

btnMultiply.addEventListener("click", () => {
    operator = "*";
    displayedValue = "0";
});

btnDivide.addEventListener("click", () => {
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