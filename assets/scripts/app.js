const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
        const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult, 
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
        if (calculationType !== 'ADD' && calculationType !== 'SUBTRACT' && calculationType !== 'MULTIPLY' && calculationType !== 'DIVIDE' || !enteredNumber) {
        return;
    }

    const initialResult = currentResult;
    let mathOpeator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOpeator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOpeator= '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOpeator= '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOpeator= '/';
    }

    createAndWriteLog(mathOpeator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult ('ADD');
}

function subtract() {
    calculateResult ('SUBTRACT');
}

function multiply() {
    calculateResult ('MULTIPLY');
}

function divide() {
    calculateResult ('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);