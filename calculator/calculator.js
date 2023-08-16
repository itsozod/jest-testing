function validNumber(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return false;
    } else {
        return true;
    }
}

function add(a, b) {
    if (validNumber(a, b)) {
        return a + b;
    } else {
        return 'Add a number!';
    }
}

function subtract(a, b) {
    if (validNumber(a, b)) {
        return a - b;
    } else {
        return 'Add a number!';
    }
}

function multiply(a, b) {
    if (validNumber(a, b)) {
        return a * b;
    } else {
        return 'Add a number!';
    }
}

function divide(a, b) {
    if (validNumber(a, b)) {
        return a / b;
    } else {
        return 'Add a number!';
    }
}
 const calculator = {
    add, 
    subtract, 
    multiply, 
    divide,
 }
 module.exports = calculator;