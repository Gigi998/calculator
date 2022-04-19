let currentText = document.getElementById("currentText");
let historyText = document.getElementById("historyText");
const buttons = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operator]");
let equal = document.querySelector("[data-equal]");
const clear = document.querySelector("[data-clear]");
const undo = document.querySelector("[data-undo]");
const dot = document.querySelector("[data-dot]");
let firstNum = 0;
let secondNum = 0;
let operator = "";
let equalSign = "";
let dotClicked = 0;

clear.addEventListener("click", () =>{
    clearAll();
});

undo.addEventListener("click", () => {
    currentText.innerText = currentText.innerText.slice(0, -1);
    historyText.innerText = historyText.innerText.slice(0, -1);
})

dot.addEventListener("click", (e) => {
    if (currentText.innerHTML != "" && dotClicked == 0){
        currentText.innerHTML += e.target.textContent;
        dotClicked += 1;
    };
});

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        currentText.innerText += e.target.textContent
    });
});

operators.forEach(operat => {
    operat.addEventListener("click",(e) => {
        if (operator != ""){
            console.log("You already enter the operator");
        }else {
            firstNum = currentText.innerHTML;
            firstNum = Number(firstNum);
            operator = e.target.textContent;
            currentText.innerHTML += operator;
            historyText.innerHTML = currentText.innerHTML;
            currentText.innerHTML = "";
            dotClicked = 0;
        };
    });
});

equal.addEventListener("click", () =>  {
    if (equalSign != "="){
        equalSign = equal.textContent;
        secondNum = currentText.innerHTML;
        if(secondNum == 0){
            alert("zero divison!!!")
            clearAll();
        }else{
            historyText.innerHTML = "";
            secondNum = Number(secondNum);
            currentText.innerHTML = operate(operator, firstNum, secondNum);
            clearAllExcept();
            firstNum = currentText.innerHTML;

            operators.forEach(operat => {
                operat.addEventListener("click",(e) => {
                    if (operator != ""){
                        console.log("You already enter the operator");
                    }else {
                        firstNum = currentText.innerHTML;
                        firstNum = Number(firstNum);
                        operator = e.target.textContent;
                        currentText.innerHTML += operator;
                        historyText.innerHTML = currentText.innerHTML;
                        currentText.innerHTML = "";
                        dotClicked = 0;
                        equal = "";
                    };
                });
            });
        };
    }else{
        console.log("You can not enter equal more than once.")
    };
});

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b ;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, a, b){
    if (operator == "+"){
        return add(a, b)
    }else if (operator == "-"){
        return subtract(a, b)
    }else if (operator == "*"){
        return multiply(a, b)
    }else if (operator == "/"){
        return divide(a, b)
    }
}

function clearAll(){
    currentText.innerText = "";
    historyText.innerText = "";
    firstNum = 0;
    secondNum = 0;
    equalSign = " ";
    operator = "";
    dotClicked = 0;
}

function numberSize(){
    return
}

function clearAllExcept(){
    historyText.innerText = "";
    firstNum = 0;
    secondNum = 0;
    equalSign = " ";
    operator = "";
    dotClicked = 0;
}








