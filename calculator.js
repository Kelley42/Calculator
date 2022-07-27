function inputNum(e) {
    console.log(e)
    problemField.innerHTML += e.target.value; // will be string though, need to change to int for operations
    console.log("hi")
    //problemField.textContent += parseInt(e.target.value)
    //problemField.innerHTML += `<span style='font-size:40px;'>${displayAnswer}</span>`;
    if (operateNumbers == true) {
        console.log("yep")
        inputSecondNum(e)
    }
}

// When operator is hit - sets first entry as num1, registers which operation
function setNum1(e) {
    num1 = parseInt(num1)
    console.log(typeof(num1))
    operator = e.target.textContent // Set operation
    if (operateNumbers == false) { // If first time being used
        console.log("bye")
        operateNumbers = true;
        console.log(operateNumbers)
        num1 = parseInt(problemField.innerHTML); // num1 is first num before operator
    }
    else { // Used to calculate answer before doing more
        num1 = parseInt(workingAnswerField.innerHTML)
        num2 = "";
        // if (operator == "+") {
        //     displayAnswer = addNum(num1, num2, operator);
        // }
        // workingAnswerField.innerHTML = displayAnswer;
    }
    problemField.innerHTML += `${operator}`
}

// Gives second number
function inputSecondNum(e) {
    console.log("boop")
    if (num2) { //double or triple digit number
        console.log("2exists")
        console.log(num1, num2)
        num2 += e.target.value;
        num2 = parseInt(num2)
    }
    else {
        console.log("2nothere")
        num2 = parseInt(e.target.value);
    }
    console.log(num1)
    console.log(num2)
    // Shows working answer - addition
    if (operator == "+") {
        displayAnswer = addNum(num1, num2);
    }
    else if (operator == "-") {
        displayAnswer = subtractNum(num1, num2);
    }
    else if (operator == "x") {
        displayAnswer = multiplyNum(num1, num2);
    }
    else if (operator == "÷") {
        displayAnswer = divideNum(num1, num2);
        console.log("divide")
        if (num2 = 0) {
            setNum1(e)
        }
    }
    workingAnswerField.innerHTML = parseFloat(displayAnswer);
}

function addNum(num1, num2) {
    console.log(typeof(num1))
    console.log(typeof(num2))
    return num1 + num2;
    //num1 = problemField.innerHTML.slice(0, -1);
}

function subtractNum(num1, num2) {
    return num1 - num2;
}

function multiplyNum(num1, num2) {
    return num1 * num2;
}

function divideNum(num1, num2) {
    if (num2 == 0) {
        alert("Can't divide by zero");
        problemField.innerHTML = problemField.innerHTML.slice(0, -1)
        return ""
        // console.log(problemField.innerHTML.slice(0, -1))
        // return problemField.innerHTML.slice(0, -1)
        // inputSecondNum(e)
    }
    else {
        console.log("woot")
        return num1 / num2;
    }
}

function showFinalAnswer() {
    problemField.innerHTML = displayAnswer
    workingAnswerField.innerHTML = ""
    num1 = displayAnswer;
    num2 = "";
    operateNumbers = false;
}

function clearInput() {
    problemField.innerHTML = "";
    workingAnswerField.innerHTML = "";
    displayAnswer = ""
    num1 = "";
    num2 = "";
    operator = "";
    // problemField.innerHTML = clearButton.value
}




// Query selectors for top part
const problemField = document.querySelector("#problem-field")
const workingAnswerField = document.querySelector("#working-answer-field")

// Query selectors for number buttons
// const numButtons = document.querySelectorAll(".number-btn")
// numButtons.forEach( () => addEventListener("click", inputNum));
document.querySelectorAll(".number-btn").forEach(numButtons => {
    numButtons.addEventListener("click", inputNum)
})

// const oneButton = document.querySelector("#one") 
// const twoButton = document.querySelector("#two")   
// const threeButton = document.querySelector("#three")
// const fourButton = document.querySelector("four")               
// const fiveButton = document.querySelector("#five") 
// const sixButton = document.querySelector("#six")
// const sevenButton = document.querySelector("#seven")
// const eightButton = document.querySelector("#eight")
// const nineButton = document.querySelector("#nine")

// Query selectors for operator buttons 
// const operatorButtons = document.querySelectorAll(".operator-btn");
// operatorButtons.forEach( () => addEventListener("click", () => setNum1));
document.querySelectorAll(".operator-btn").forEach(operatorButtons => {
    operatorButtons.addEventListener("click", setNum1)
})


//const plusButton = document.querySelector("#plus") 
//plusButton.addEventListener("click", addNum(num1, num2)) 
//const minusButton = document.querySelector("#minus")
// minusButton.addEventListener("click", setNum1)
//const divisionButton = document.querySelector("#division")
// divisionButton.addEventListener("click", setNum1)
//const multiplyButton = document.querySelector("#multiply") 
// multiplyButton.addEventListener("click", setNum1)

const backspaceButton = document.querySelector("#backspace")
const clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", clearInput)
const parenthesesButton = document.querySelector("#parentheses")
const percentButton = document.querySelector("#percent")
                       
                  

        
const posnegButton = document.querySelector("#pos-neg") 
const zeroButton = document.querySelector("#zero")   
const decimalButton = document.querySelector("#decimal")
const equalsButton = document.querySelector("#equals") 
equalsButton.addEventListener("click", showFinalAnswer)           

let displayAnswer;
let operateNumbers = false;
let num1;
let num2;
let operator;
