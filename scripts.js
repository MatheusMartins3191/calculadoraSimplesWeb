var number = "";
var resultOfTheCalculation = document.getElementById("resultOfTheCalculation");

function addDigitToTheNumber(a) {
    number += a;
    resultOfTheCalculation.innerHTML = number;
}

function clearResult() {
    number = ""
    resultOfTheCalculation.innerHTML = number;
}
