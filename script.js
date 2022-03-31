const numbers = document.querySelectorAll('.number');
const calculatorScreen = document.querySelector('.calculator-screen')
const hasil = document.querySelector('.hasil');

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const updateHasil = (number) => {
    hasil.value = number
}
numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if(currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const inputOperator = (operator) => {
    if(calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
}

const operators = document.querySelectorAll('.operator')
    operators.forEach((operator) => {
        operator.addEventListener('click', (event) => {
            inputOperator(event.target.value)
        })
})

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    calculate()
    updateHasil(`${prevNumber}  ${currentNumber}`)
    updateScreen(hasilNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case"+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    hasilNumber = result
    calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear')
const clearAll = () => {
    prevNumber = ' - '
    calculationOperator = ''
    currentNumber = '0'
}
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
    updateHasil(prevNumber)
})

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const percent = document.querySelector('.precentage');
const inputPercent = () => {
    currentNumber += percent
    percentResult = 0.01 * parseFloat(currentNumber);
    currentNumber = percentResult;
}

percent.addEventListener('click', (event) => {
    inputPercent(event.target.value)
    updateScreen(currentNumber)
})
