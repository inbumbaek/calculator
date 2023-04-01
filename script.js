const display = document.getElementById("display");
let num1 = "";
let num2 = "";
let op = "";


function press(num) {
    num1 += num;
    display.innerHTML = num1;
}

function setOP(key) {
    op = key;
    num2 = num1;
    num1 = "";
}

function clr() {
    num1 = "";
    num2 = "";
    op = "";
    display.innerHTML = "0";
}

function calculate() {
    let a = parseFloat(num2);
    let b = parseFloat(num1);
    let res = 0;
    switch (op) {
        case "+":
            res = a + b;
            break;
        case "-":
            res = a - b;
            break;
        case "*":
            res = a * b;
            break;
        case "/":
            res = a / b;
            break;
    }
    num1 = res;
    op = "";
    display.innerHTML = res;
}

// const display = document.querySelector('#display');
// let operator = "";
// let num1 = "";
// let num2 = "";

// function press(num){
//     num1 += num

//     display.innerText = num1
// }

// function setOP(op){
//     operator = op;
//     num2 = num1
//     num1 = ""
// }

// function clr() {
//     num1 = "";
//     num2 = "";
//     operator = "";
//     display.innerText = 0;
// }

// function calculate(){
//     let a = parseFloat(num2);
//     let b = parseFloat(num1);
//     let result = 0;
//     if(operator == "+"){
//         result = a + b;
//     }
//     else if(operator == "-"){
//         result = a - b;
//     }
//     else if(operator == "*"){
//         result = a * b;
//     }
//     else {
//         result = a / b;
//     }
//     display.innerText = result;
// }