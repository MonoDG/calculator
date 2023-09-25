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

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

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

const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");
let displayedNumber = "0";

buttons.forEach(button => {
    button.addEventListener("mousedown", function () { this.classList.add("button-active") });
    button.addEventListener("mouseup", function () { this.classList.remove("button-active") });
});

const btnNumbers = document.querySelectorAll(".btn-numbers button");
btnNumbers.forEach(button => {
    button.addEventListener("click", function () {
        if (displayedNumber.length < 10) {
            if (displayedNumber === "0" && this.textContent !== "0") {
                displayedNumber = this.textContent;
            } else if (displayedNumber !== "0") {
                displayedNumber += this.textContent;
            }
            display.textContent = displayedNumber;
        }
    })
});

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", () => {
    displayedNumber = "0";
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    display.textContent = displayedNumber;
})

const btnAdd = document.querySelector("#add");
btnAdd.addEventListener("click", function () {
    if (operator !== "") {
        secondNumber = parseInt(displayedNumber);
        firstNumber = operate(firstNumber, secondNumber, operator);
        displayedNumber = `${firstNumber}`;
        display.textContent = displayedNumber;
        operator = "+";
        displayedNumber = "0";
        console.log(`${firstNumber} + `)
    } else {
        firstNumber = parseInt(displayedNumber);
        operator = "+";
        displayedNumber = "0";
    }
})