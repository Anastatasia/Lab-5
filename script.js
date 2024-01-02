const res = document.getElementById('res');
const firstValue = document.getElementById('first-value');
const secondValue = document.getElementById('second-value');
const calcBtn = document.getElementById('calc');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn =
    document.getElementById('multiply');
const divisionBtn =
    document.getElementById('division');
let action = '+';
plusBtn.onclick = function () {
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}
multiplyBtn.onclick = function () {
    action = '*'
}
divisionBtn.onclick = function () {
    action = '/'
}
const printRes = function (result) {
    if (result >= 0) {
        res.style.color = 'green'
    } else {
        res.style.color = 'red'
    }
    res.textContent = result;
}
const calcResult = function () {
    const firstNumber = Number(firstValue.value);
    const secondNumber = Number(secondValue.value);
    if (action === '+') {
        return firstNumber + secondNumber;
    } else {
        return firstNumber - secondNumber;
    }
}
calcBtn.onclick = function () {
    const result = calcResult();
    printRes(result);
}