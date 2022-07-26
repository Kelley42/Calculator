function inputNum(e) {
    problemField.innerHTML += e.target.value; // will be string though, need to change to int for operations
    console.log("hi")
    //problemField.textContent += parseInt(e.target.value)
    //problemField.innerHTML += `<span style='font-size:40px;'>${displayAnswer}</span>`;
}

// Sets first entry as num1, registers which operation was chosen
function setNum1() {
    num1 = parseInt(problemField.innerHTML);
    console.log(num1) //need to return final num1?
    console.log("bye")
    return num1;
}
// function setAdd() {
//     num1 = parseInt(problemField.innerHTML)
//     //num1 = problemField.innerHTML.slice(0, -1);
// }

// function setSubtract() {
//     num1 = parseInt(problemField.innerHTML)
// }


function clearInput() {
    problemField.innerHTML = "";
    // problemField.innerHTML = clearButton.value
}




// Query selectors for top part
const problemField = document.querySelector("#problem-field")

// Query selectors for number buttons
const numButtons = document.querySelectorAll(".number-btn")
numButtons.forEach(function () {
    addEventListener("click", inputNum);
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
const operatorButtons = document.querySelectorAll(".operator-btn")
operatorButtons.forEach(function () {
    addEventListener("click", setNum1);
})

const backspaceButton = document.querySelector("#backspace")
const clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", clearInput)
const parenthesesButton = document.querySelector("#parentheses")
const percentButton = document.querySelector("#percent")
const divisionButton = document.querySelector("#division")
const multiplyButton = document.querySelector("#multiply")                        
const minusButton = document.querySelector("#minus")
//minusButton.addEventListener("click", setSubtract)                  
const plusButton = document.querySelector("#plus") 
//plusButton.addEventListener("click", setAdd)         
const posnegButton = document.querySelector("#pos-neg") 
const zeroButton = document.querySelector("#zero")   
const decimalButton = document.querySelector("#decimal")
const equalsButton = document.querySelector("#equals")            

let displayAnswer;
let num1;
let num2;