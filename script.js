let display = document.getElementById('display');

function appendNumber(number) {
    if (display.textContent === '0' && number !== '.') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}

function appendOperator(operator) {
    display.textContent += operator;
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}

function clearDisplay() {
    display.textContent = '0';
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === "") {
        display.textContent = "0";
    }
}
