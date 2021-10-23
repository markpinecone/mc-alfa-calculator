const input = document.getElementById("input");
const numbers =  document.querySelector("#numbers");
const   operations =  document.querySelector("#operations");
let float = false;
var value;
var value2;
var opr;

window.onload = init;

function init() {
    numbers.addEventListener("click", handleNumButton, false);
    operations.addEventListener("click", handleOprButton, false);
    document.getElementById("clr").addEventListener("click", clear);
}

function handleNumButton(event) {
if (event.target !== event.currentTarget) {
    let clickedItem = event.target.innerText;
    processButton(clickedItem)
    }
}

function handleOprButton(event) {
    if (event.target !== event.currentTarget) {
    let clickedItem = event.target.innerText;
        processOprButton(clickedItem)
    }
}


function processButton(clickedItem) {
    switch (clickedItem) {
        case '0':
            if (input.value != 0) {
                input.value += clickedItem;
            }
            break;
        case '-':
            if (input.value) {
                input.value * -1;
            }
            break;
        case '.':
            float = true;
            break;
        default:
            if (float) {
                input.value += clickedItem;
                input.value = parseFloat(input.value * 0.1).toFixed(1);
                float = false;
            } else {
            input.value += clickedItem;
            }
    }
}

function processOprButton(clickedItem) {
    switch (clickedItem) {
        case '=':
            value2 = parseFloat(input.value);
            input.value = doMath();
            clean();
            break;
        case 'CE':
            clear();
            break;
        case 'sqrt':
            input.value = Math.sqrt(input.value)
            break;
        default:
            value = parseFloat(input.value);
            opr = clickedItem;
            console.log('/' + value + '/' +  opr + '/');
            input.value = '';
            break;
        }
}


function doMath() {
    if(opr) {
        if(!value) {
            value = 0;
        }
        switch(opr) {
            case '+':
                return value + value2
            case '-':
                return value - value2
            case '*':
                return value * value2
            case '/':
                return value / value2
            case '^':
                return value ** value2
        }
    } else {
        console.log('Error: Operator is not defined!')
    }

}
function clear() {
    input.value = "";
    clean();
}

function clean() {
    value = 0;
    opr = '';
    value2 = 0;
}
