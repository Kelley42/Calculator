function inputNum(e) {
    // Show each digit

    // problemField.innerHTML = toString(problemField.innerHTML) // change any digits already present into string

    

    // if (e.target.value) { // click event
    //     console.log("yes")
    //     problemField.innerHTML += e.target.value; // string (need to => int)
    // }
    // else { // keydown event
    //     console.log("nope")
    //     e.target.value = e.key
    //     problemField.innerHTML += e.target.value
    // }
    if(e.key) {
        problemField.innerHTML += e.key
    }
    else{
        problemField.innerHTML += e.target.value;
    }
    console.log("hi")
    //problemField.textContent += parseInt(e.target.value)
    //problemField.innerHTML += `<span style='font-size:40px;'>${displayAnswer}</span>`;
    if (operateNumbers == false) { // working on first num
        num1on = true;
        num1 = parseFloat(problemField.innerHTML)
    }
    else if (operateNumbers == true) {
        console.log("yep")
        inputSecondNum(e)
    }
}

// When operator is hit - sets first entry as num1, registers which operation
function setNum1(e) {
    console.log("boopboop")
    if(e.key) {
        operator = e.key
    }
    else {
        operator = e.target.textContent
    }
    num1 = parseFloat(num1)
    num1on = false // done with num1
    
    // if (e.target.textContent) { // click event
    //     console.log("?????")
    //     operator = e.target.textContent // Set operation
    // }
    // else { // keydown event
    //     operator = e.key
    //     console.log(operator)
    // }
    
    if (operateNumbers == false) { // If first time being used
        console.log("bye")
        operateNumbers = true;
        //num1 = parseFloat(problemField.innerHTML); // num1 is first num before operator
    }
    else { // Used instead of equals to calculate answer before doing more
        snapshotNum1 = problemField.innerHTML
        num1 = parseFloat(workingAnswerField.innerHTML)
        num2 = "";
        // if (operator == "+") {
        //     displayAnswer = addNum(num1, num2, operator);
        // }
        // workingAnswerField.innerHTML = displayAnswer;
    }
    console.log(`num1:${num1}`)
    console.log(operator)
    problemField.innerHTML += `${operator}`
    console.log(problemField.innerHTML)
    num2on = true; // working on num2
}

// Gives second number
function inputSecondNum(e) {
    console.log("boop")
    console.log(num1)
    console.log(e)
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
    determineDisplayAnswer()
}

function determineDisplayAnswer() {
    // Shows working answer - addition
    if (operator == "+") {
        addOn = true;
        displayAnswer = addNum(num1, num2);
    }
    else if (operator == "-") {
        subtractOn = true;
        displayAnswer = subtractNum(num1, num2);
    }
    else if (operator == "x" || operator == "*") {
        multiplyOn = true;
        displayAnswer = multiplyNum(num1, num2);
    }
    else if (operator == "÷" || operator == "/") {
        divideOn = true;
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

function percentNum() {
    console.log("booyah")
    num1 = parseFloat(problemField.innerHTML)
    problemField.innerHTML += "%"
    if (num1on == true) { // working on num1
        num1 /= 100;
        workingAnswerField.innerHTML = num1
        console.log(num1)
    }
    else if (num2on == true) { // working on num2
        num2 /= 100;
        num2 *= num1;
        determineDisplayAnswer()
    }
}

function showFinalAnswer() {
    problemField.innerHTML = displayAnswer
    workingAnswerField.innerHTML = ""
    num1 = displayAnswer;
    num2 = "";
    operateNumbers = false;
    num2on = false;
}

function clearInput() {
    problemField.innerHTML = "";
    workingAnswerField.innerHTML = "";
    displayAnswer = ""
    num1 = "";
    num2 = "";
    operator = "";
    operateNumbers = false;
    num2on = false;
    // problemField.innerHTML = clearButton.value
}

function addPosNeg() {
    if (!(num1) && num1on == false) { // haven't started typing digits
        console.log("woohoo")
        problemField.innerHTML = "-"
    }
    else if (num1on == true) { // typing num1
        console.log("1on")
        console.log(num1)
        num1 = parseFloat(problemField.innerHTML)
        num1 *= -1 
        problemField.innerHTML = num1
    }
    else if (num2on == true) { // typing num2
        if (!(num2) || num2 == "") { // num2 doesn't exist
            num2 = "-"
            problemField.innerHTML += num2
        }
        else { // already typing num2
            console.log(num2)
            console.log("WHAAAAAAAT")
            num2 = parseFloat(num2)
            num2 *= -1 
            console.log(snapshotNum1)
            if (snapshotNum1) { // more than 2 nums being operated
                console.log("long")
                snapshotNum1 += operator // add last operator
                problemField.innerHTML = snapshotNum1 + num2
            }
            else {
                problemField.innerHTML = num1+operator+num2
            }
        }
        determineDisplayAnswer()
    }
    else { // looking at final answer (already float)
        displayAnswer *= -1;
        problemField.innerHTML = displayAnswer;
    }
    
}


// Query selectors for top part
let problemField = document.querySelector("#problem-field")
let workingAnswerField = document.querySelector("#working-answer-field")

// Query selectors for number buttons
// const numButtons = document.querySelectorAll(".number-btn")
// numButtons.forEach( () => addEventListener("click", inputNum));

// let numArray = [];
document.querySelectorAll(".number-btn").forEach(numButtons => {
    numButtons.addEventListener("click", inputNum)
    // numArray.push(numButtons)
})
// console.log(numArray)


// Keydown events 
window.addEventListener("keydown", function(e) {
    if(e.key >= 0 && e.key <= 9) {
        console.log(e.key)
        e.target.value = e.key
        inputNum(e)
    }
    else if(e.key == "+" || e.key == "-" || e.key == "*" || e.key == "x" || e.key == "/") {
        console.log(e.key)
        // e.target.textContent = e.key
        setNum1(e)
    }
    else if(e.key == "=") {
        showFinalAnswer()
    }
    else if(e.key == "c") {
        clearInput()
    }
    else if(e.key == ".") {
        console.log(e.key)
        inputNum(e)
    }
    else if(e.key == "%") {
        percentNum(e)
    }
})


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
percentButton.addEventListener("click", percentNum)
        
const posnegButton = document.querySelector("#pos-neg");
posnegButton.addEventListener("click", addPosNeg)
const zeroButton = document.querySelector("#zero")   
const decimalButton = document.querySelector("#decimal")
decimalButton.addEventListener("click", inputNum)
const equalsButton = document.querySelector("#equals") 
equalsButton.addEventListener("click", showFinalAnswer)           

let displayAnswer;
let operateNumbers = false;
let num1;
let num1on = false;
let num2;
let num2on = false;
let operator;
let addOn = false;
let subtractOn = false;
let multiplyOn = false;
let divideOn = false;
let snapshotNum1; // before combining several numbers into num1
