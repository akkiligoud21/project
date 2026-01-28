let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '0';
}

function calculate() {
    try {
        let result = eval(display.value.replace(/x/g, '*'));  // Number math ops
        display.value = parseFloat(result.toFixed(8));  // ParseFloat, precision
    } catch {
        display.value = 'Error';
    }
}
