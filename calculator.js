

function inputNum(e) {
    problemField.innerHTML += e.target.value; // will be string though, need to change to int for operations
    console.log("hi")
    //problemField.textContent += parseInt(e.target.value)
    //problemField.innerHTML += `<span style='font-size:40px;'>${displayAnswer}</span>`;
}

// Sets first entry as num1, registers which operation was chosen
function setNum1(e) {
    // If first time being used
    if (operateNumbers == false) { 
        console.log("bye")
        operateNumbers = true;
        num1 = parseInt(problemField.innerHTML); // num1 is first num before operator
    }
    problemField.innerHTML += ` ${e.target.textContent} `
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


// const plusButton = document.querySelector("#plus") 
// plusButton.addEventListener("click", setNum1) 
// const minusButton = document.querySelector("#minus")
// minusButton.addEventListener("click", setNum1)
// const divisionButton = document.querySelector("#division")
// divisionButton.addEventListener("click", setNum1)
// const multiplyButton = document.querySelector("#multiply") 
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

let displayAnswer;
let operateNumbers = false;
let num1;
let num2;