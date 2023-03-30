var number = ""
var valueOne;
var valueTwo;
var mathOperator;
var resultOfTheCalculation = document.getElementById("resultOfTheCalculation");

function addDigitToTheNumber(a) {
    number += a;
    resultOfTheCalculation.innerHTML = number;
}

function clearResult() {
    number = "";
    resultOfTheCalculation.innerHTML = number;
}

function setMathOperator(a) {
    mathOperator = a;
    valueOne = parseInt(number);
    number = "";
    resultOfTheCalculation.innerHTML = number;
}

function sum() {
    valueTwo = parseInt(number);
    var sum = valueOne + valueTwo;
    number = sum;
    resultOfTheCalculation.innerHTML = number;
}

function calculateResult(mathOperator) {
    if (number != "") {
            sum();
    }    
    
}
