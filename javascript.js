function resetAll() {
    //operation.textContent = '';
    subtotal.textContent = '';
    display.textContent = '';
    calculation = {}
}

function add(a,b) {
    console.log(a+b);
    return a+b;
}

function subtract(a,b) {
    console.log(a-b);
    return a-b;
}

function multiply(a,b) {
    console.log(a*b);
    return a*b;
}

function divide(a,b) {
    //check if div by 0
    if(b === 0) {
        alert("ERROR: Divide by 0 \nReseting calculator");
        reset();
        return;
    }
    return a/b;
}

function operate(calculation) {
    a = Number(calculation.num1);
    b = Number(calculation.num2);
    switch(calculation.op) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return alert("operate() error")
    }
}