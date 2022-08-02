function inputNum(e) {
    // If overall length of problem too long
    if (problemField.innerHTML && problemField.innerHTML.length > 29) {
        alert("Max limit of digits")
        return
    }
    
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

    else{
        if(e.key) { // keyboard input
            problemField.innerHTML += e.key
        }
        else{ // click input
            problemField.innerHTML += e.target.value;
        }
        if (!(num1)) {
            num1 = problemField.innerHTML
        }
        //problemField.textContent += parseInt(e.target.value)
        //problemField.innerHTML += `<span style='font-size:40px;'>${displayAnswer}</span>`;
        if (operateNumbers == false) { // working on first num
            num1on = true;
            // If input is decimal
            if (e.target.value == "." || e.key == ".") { 
                // Decimal after digit
                if (num1on = true) {
                    console.log("already here")
                    num1 += "."
                    num1commas += "."
                }
                // Decimal is first input - show 0 before decimal
                else { 
                    console.log("not already here")
                    num1 = "0."
                    num1commas += "0."
                }
            }
            // Input is digit
            else {
                num1 = (problemField.innerHTML.replace(/\,/g, "")) //strip commas
                console.log(`num1beforelocale: ${num1}`)
                num1commas = Number(num1).toLocaleString() //format if no decimal
                console.log(`num1commasafterlocale:${num1commas}`)
            }
            // problemField.innerHTML = problemField.innerHTML.replace(/\,/g, "") //strip commas
            

            //num1 = parseFloat(num1.replace(/\,/g, "")) //strips commas if present
            console.log(num1)
            // num1 = parseFloat(problemField.innerHTML)
            console.log(num1commas)
            problemField.innerHTML = num1commas
            workingAnswerField.innerHTML = num1commas
        
        }
        else if (operateNumbers == true) { //working on second num
            console.log("yep")
            console.log(num1)
            console.log(num2)
            console.log(num2commas)
            inputSecondNum(e)
        }
    }
}

// When operator is hit - sets first entry as num1, registers which operation
function setNum1(e) {
    console.log("boopboop")
    // If num1 doesn't exist
    if (!(num1)) {
        alert("You must enter a number first.")
    }
    else {
        if(e.key) { //keyboard input
            operator = e.key
        }
        else { //clicked input
            operator = e.target.textContent
        }
        console.log(num1)
        num1 = parseFloat(num1)
        num1on = false // done with num1
        
        if (operateNumbers == false) { // If first time being used
            console.log("bye")
            operateNumbers = true;
            //num1 = parseFloat(problemField.innerHTML); // num1 is first num before operator
        }
        else { // Used instead of equals to calculate answer before doing more
            snapshotNum1 = problemField.innerHTML
            num1commas = snapshotNum1
            snapshotNum1On = true;
            num1 = displayAnswer
            //num1 = parseFloat(workingAnswerField.innerHTML)
            num2 = "";
        }
        console.log(`num1:${num1}`)
        console.log(operator)
        problemField.innerHTML += `${operator}`
    }
}

// Gives second number
function inputSecondNum(e) {
    console.log("boop")
    console.log(num1)
    console.log(num2)
    console.log(num2commas)
    num2on = true; // working on num2
    // Num2 already exists
    if (num2) { //double or triple digit number or decimal
        console.log(num1, num2)
        // Input is decimal
        if (e.target.value == "." || e.key == ".") { 
            console.log("nowdecimal")
            num2 += "."
            num2commas += "."
            console.log(num2)
            console.log(`num2commas input3:${num2commas}`)
        }
        // Input is digit
        else { 
            console.log("digitnow5")
            console.log(num2)
            num2 = num2 + e.target.value;
            num2commas += e.target.value
            //num2 = num2commas
            console.log(`5: ${num2} ${num2commas}`)
            num2commas = Number(num2).toLocaleString()
            console.log(`what:${num2commas}`)
            console.log(`num2: ${num2}`)
            num2 = parseFloat(num2)
            console.log(`parsed${num2}`)
        }
    }
    // Num2 doesn't exist yet
    else {
        console.log("2nothere")
        // Decimal first - put 0 in front
        if (e.target.value == "." || e.key == ".") { 
            num2 = "0."
            num2commas += "0."
            console.log(num2)
            //problemField.innerHTML = num1commas + operator + num2commas
        }
        // Digit first
        else {
            console.log("digitfirst")
            console.log(num2)
            num2 = parseFloat(e.target.value);
            num2commas = num2
            console.log(`parse1: ${num1} ${num2commas}`)
        }
    }
    //num2 = (num2.replace(/\,/g, "")) //strip commas
    
    
    // console.log(num1)
    // console.log(`num2:${num2}`)
    console.log(num1)
    console.log(num1commas)
    console.log(`num2 2and4: ${num2}`)
    console.log(`num2commas2and4: ${num2commas}`)
    if (snapshotNum1On == true) { // multiple operations
        problemField.innerHTML = snapshotNum1 + operator + num2commas;
    }
    else {
        problemField.innerHTML = num1commas + operator + num2commas
    }
    // If last input not a decimal, allow to determine answer
    if (!(e.target.value == "." || e.key == ".")) { //only determine answer if last input not decimal
        determineDisplayAnswer()
    }
    // // Last input is decimal
    // else {
    //     console.log("slice!")
    //     // Take off decimal
    //     num2 = num2.slice(0, -1) 
    //     determineDisplayAnswer()
    // }
}

function determineDisplayAnswer() {
    console.log("determine")
    // Shows working answer - addition
    console.log(`add: ${num1} ${num2}`)
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    console.log(`add: ${num1} ${num2}`)
    console.log(num1commas, num2commas)
    if (operator == "+") {
        addOn = true;
        displayAnswer = addNum(num1, num2);
        console.log(displayAnswer)
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
        console.log(num1, num2)
        displayAnswer = divideNum(num1, num2);
        console.log("divide")
        console.log(num2)
        // if (num2 = 0) {
        //     setNum1(e)
        // }
    }
    //workingAnswerField.innerHTML = parseFloat(displayAnswer);
    workingAnswerField.innerHTML = Number(displayAnswer).toLocaleString()
    //workingAnswerField.innerHTML = Number(workingAnswerField).toLocaleString()
}

function addNum(num1, num2) {
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
        console.log(num1)
        console.log(num2)
        console.log(num1commas, num2commas)
        return num1 / num2;
    }
}

function percentNum() {
    console.log("booyah")
    if (!(num1 || num2)) {
        alert("You must enter a number first.")
    }
    else {
        //num1 = parseFloat(problemField.innerHTML)
        // percentButton.style.color = "rgb(4, 96, 235)";
        // problemField.innerHTML += percentButton.innerHTML
        problemField.innerHTML += "%";
        if (num2on == true) { // working on num2
            num2 /= 100;
            num2 *= num1;
            num2commas = num2;
            determineDisplayAnswer()
        }
        else { // working on num1
            num1commas = num1 + "%";
            num1 /= 100;
            displayAnswer = num1
            //num1commas = num1
            workingAnswerField.innerHTML = num1
            console.log(num1)
        }
    }
}

function squaredNum() {
    if (!(num1 || num2)) {
        alert("You must enter a number first.")
    }
    else {
        //num1 = parseFloat(problemField.innerHTML)
        problemField.innerHTML += "²"
        console.log(problemField.innerHTML)
        if (num2on == true) { // working on num2
            unsquaredNum = num2 //saved in case backspace
            num2 *= num2;
            num2commas = num2;
            console.log(num1, num1commas, num2, num2commas)
            determineDisplayAnswer()
        }
        else { // working on num1
            num1commas = num1 + "²"
            num1 *= num1;
            console.log(num1)
            displayAnswer = num1
            //num1commas = num1
            workingAnswerField.innerHTML = num1
            console.log(num1)
        }
    }
}

function backspaceNum() {
    if (num1 || num2) {
        console.log(num1)
        console.log(snapshotNum1)
        console.log("byeeeee")
        console.log(num1commas)
        console.log(num1, operator, num2)
        if (num1on == true) { // typing num1
            console.log(`trythis:${num1commas} ${operator} ${num2commas}`)
            console.log(`trythis:${num1} ${operator} ${num2}`)
            num1 = String(num1)
            num1commas = String(num1commas)
            // Erase last symbol
            //num1 = num1commas.slice(0, -1)
            if (num1commas.length == 1) { // If last digit
                console.log("length1")
                num1commas = ""
                num1 = ""
                num1on = false 
                operateNumbers = false
                problemField.innerHTML = num1commas
                workingAnswerField.innerHTML = num1commas
            }
            else {
                num1commas = num1commas.slice(0, -1)
                // Strip commas
                num1 = num1commas.replace(/\,/g, "") 
                num1commas = num1commas.replace(/\,/g, "") 
                // Convert num1commas to be formatted again
                num1commas = Number(num1).toLocaleString()
                problemField.innerHTML = num1commas
                workingAnswerField.innerHTML = num1commas
            }
        }
        else if (num2on == true) { // typing num2
            console.log("2nd")
            num2 = String(num2)
            num2commas = String(num2commas)
            console.log(num2)
            console.log(`num2commas:${num2commas}`)
            // Remove percent or squared
            if (problemField.innerHTML.slice(-1) == "%" || problemField.innerHTML.slice(-1) == "²") {
                problemField.innerHTML = problemField.innerHTML.slice(0, -1)
                console.log("removed")
                if (num1on == true) {
                    workingAnswerField.innerHTML = num1commas
                }
                else if (num2on == true) {
                    num2 = unsquaredNum
                    num2commas = unsquaredNum
                    determineDisplayAnswer()
                }
            }
            // Erase last symbol
            else if (num2commas.length == 1) { // If last digit
                console.log("erase last digit")
                num2commas = ""
                num2 = ""
                num2on = false 
                console.log(num1commas)
                console.log(operator)
                console.log(num2)
                console.log(snapshotNum1)
            }
            else {
                console.log("not last digit")
                num2commas = num2commas.slice(0, -1)
                console.log(`newnum2commas:${num2commas}`)
                // Strip commas
                num2 = num2commas.replace(/\,/g, "") 
                num2commas = num2commas.replace(/\,/g, "")
                console.log(num1commas, operator, num2commas)
                // Reformat
                num2commas = Number(num2).toLocaleString()
                console.log(`num2commas: ${num2commas}`)
                console.log(`here: ${snapshotNum1, operator, num2commas}`)
                //problemField.innerHTML = num1commas + operator + num2commas
                problemField.innerHTML = snapshotNum1 + operator + num2commas
            }
            // if erased all of num2
            if(num2commas == "") {
                console.log("empty")
                console.log(num1commas)
                //snapshotNum1 = num1commas
                console.log(snapshotNum1)
                workingAnswerField.innerHTML = Number(num1).toLocaleString()
                //problemField.innerHTML = num1commas + operator
                //problemField.innerHTML = snapshotNum1 + operator
                problemField.innerHTML = problemField.innerHTML.slice(0, -1)
                snapshotNum1On = false
            }
            else{
                console.log(`num2commasboop:${num2commas}`)
                determineDisplayAnswer()
            }
        }
        else { //typing operator
            console.log("erase operator")
            //problemField.innerHTML = num1commas
            console.log(snapshotNum1)
            //problemField.innerHTML = snapshotNum1
            problemField.innerHTML = problemField.innerHTML.slice(0, -1)
            console.log(num1)
            console.log(num1commas)
            console.log(num2commas)
            //num1on = true
            // If multiple operators were present
            // Separate back into num1 and num2
            let operatorIndex;
            multipleOperations = false
            for (let i = problemField.innerHTML.length-1; i >= 0; i--) {
                let c = problemField.innerHTML.charAt(i);
                if (c == "+" || c == "-" || c == "x" || c == "/") {
                    console.log("slice")
                    operator = c;
                    operatorIndex = i
                    num1commas = problemField.innerHTML.slice(0, i)
                    num2commas = problemField.innerHTML.slice(i+1, problemField.innerHTML.length)
                    multipleOperations = true
                    num2on = true //will be working on num2
                    break;
                }
            }
            if (multipleOperations == false) { //only num1 left
                console.log("1operation")
                //problemField.innerHTML = snapshotNum1
                problemField.innerHTML = num1commas
                num1on = true
                operateNumbers = false
                console.log(num1)
                console.log(num1commas)
                workingAnswerField.innerHTML = Number(num1).toLocaleString()
            }
            else {
                console.log(`c: ${operator}`)
                console.log(num1commas)
                console.log(num2commas)
                num1 = parseFloat(num1commas)
                num2 = parseFloat(num2commas)
                console.log(num1, operator, num2)
                //determineDisplayAnswer()
            }
        }
    }
}

function showFinalAnswer() {
    if (num2 || num1on == true) { // Will not work after just hitting operator
        // problemField.innerHTML = displayAnswer
        console.log(`displayAnswer: ${displayAnswer}`)
        console.log(`workingAnswerField: ${workingAnswerField.innerHTML}`)
        problemField.innerHTML = parseFloat(displayAnswer)
        problemField.innerHTML = Number(problemField.innerHTML).toLocaleString() //show commas
        if (problemField.innerHTML.length > 29) { // shrink font to fit
            problemField.style.fontSize = "30px"
        }

        workingAnswerField.innerHTML = ""
        num1 = displayAnswer;
        num1commas = displayAnswer;
        num2 = "";
        operateNumbers = false;
        num2on = false;
        snapshotNum1On = false;
    }
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
    snapshotNum1On = false;
    // problemField.innerHTML = clearButton.value
}

function addPosNeg() {
    if (!(num1) && num1on == false) { // haven't started typing digits
        console.log("woohoo")
        if (problemField.innerHTML == "-") { // already has negative sign
            problemField.innerHTML = ""
        }
        else {
            problemField.innerHTML = "-"
        }
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
        console.log("negative")
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
    else if(e.key == "Backspace") {
        backspaceNum(e)
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
backspaceButton.addEventListener("click", backspaceNum)
const clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", clearInput)
const squaredButton = document.querySelector("#squared")
squaredButton.addEventListener("click", squaredNum)
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
let num1commas;
let num2;
let num2on = false;
let num2commas;
let operator;
let addOn = false;
let subtractOn = false;
let multiplyOn = false;
let divideOn = false;
let snapshotNum1; // before combining several numbers into num1
let snapshotNum1On = false; // doing multiple operations
let unsquaredNum;
let multipleOperations = false;

console.log(problemField.innerHTML.length)