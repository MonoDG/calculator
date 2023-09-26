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
        return "Error: Division by 0";
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


let firstNumber = null;
let secondNumber = null;
let operator = "";
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");
let displayedValue = "0";

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

const btnNumbers = document.querySelectorAll(".btn-numbers button");
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
    }
}));

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", clearValues);

const btnAdd = document.querySelector("#add");
const btnSubstract = document.querySelector("#substract");
const btnMultiply = document.querySelector("#multiply");
const btnDivide = document.querySelector("#divide");
const btnEqual = document.querySelector("#equal");

btnAdd.addEventListener("click", () => {
    operator = "+";
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
        if (secondNumber === null) secondNumber = firstNumber;
        result = operate(firstNumber, secondNumber, operator);
        displayedValue = `${result}`;
        display.textContent = displayedValue;
        firstNumber = result;
    }
});
