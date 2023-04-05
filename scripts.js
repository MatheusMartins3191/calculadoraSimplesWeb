var resultOfTheCalculation = document.getElementById("resultOfTheCalculation");
resultOfTheCalculation.innerHTML = "teste"; //Change after the code is complete;

var number = "";
var resultOfTheOperation;
var valueOne;
var valueTwo;
var operator;

function addDigitToTheNumber(digit) {
    number += digit;
    resultOfTheCalculation.innerHTML = number;

}

function getMathOperator(op) {
    operator = op;
    valueOne = parseFloat(number);
    number = "";
    resultOfTheCalculation.innerHTML = valueOne + " " + a;
}

function sum() {
    valueTwo = parseFloat(number);
    var sum = valueOne + valueTwo;
    number = "" + sum;
    resultOfTheCalculation.innerHTML = number;
}

function subtraction() {
    valueTwo = parseFloat(number);
    var subtraction = valueOne - valueTwo;
    number = "" + subtraction;
    resultOfTheCalculation.innerHTML = number;
}

function multiplication() {
    valueTwo = parseFloat(number);
    var multiplication = valueOne * valueTwo;
    number = "" + multiplication;
    resultOfTheCalculation.innerHTML = number;
}

function division() {
    valueTwo = parseFloat(number);
    var division = valueOne / valueTwo;
    number = "" + division;
    resultOfTheCalculation.innerHTML = number;
}

function calculateResult() {

    if ( number != "" ) {

        switch(operator) {

            case '+':
                sum();
                operator = "";                
                break;
            case '-':
                subtraction();
                operator = "";
                break;
            case 'x':
                multiplication();
                operator = "";
                break;
            case '÷':
                division();
                operator = "";
                break;             

        }

    }

}

function clearResult() {

    number = "";
    resultOfTheCalculation.innerHTML = number;

}
