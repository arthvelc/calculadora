
const btn = document.querySelectorAll('.btn-light')
const btnEqual = document.querySelector('#btn-equal')
const btnDelete = document.querySelector('#btn-del')
const btnReset = document.querySelector('#btn-ac')

let display = document.getElementById('input');
let resultDisplay = document.getElementById('results');
let currentInput = '';
let previousResult = '';

function updateDisplay(value){
    display.textContent = value;//textContend es una propiedad que permite cambiar el texto de un elemento
}

function hanleNumberClick(){
    currentInput += value;
    updateDisplay(currentInput);
}

function handleOperatorClick(operator){
    if(currentInput != ''){
        currentInput += operator;
        updateDisplay(currentInput)
    }
}

function calculateResult(){
    let expression = currentInput.replace(/x/g, '*').replace(/÷/g, '/').replace(/x10/, '*10'); //reemplaza los caracteres x por * y ÷ por / para que el eval pueda hacer la operación matemática correctamente la sintaxis //g es para que reemplace todas las ocurrencias
    let result = eval(expression); //eval evalua una expresión matemática en forma de string

    previousResult = result
    resultDisplay.textContent= result;
    currentInput = result.toString()
    updateDisplay(result)
}

function handleDelete(){
    currentInput = currentInput.slice(0, -1);//slice va a cortar el string desde el primer caracter hasta el penúltimo
    
    currentInput === '' ? updateDisplay('0'): updateDisplay(currentInput)

}

btn.forEach((button) =>{
    button.addEventListener('click', ()=>{
        if(button.value.match(/[0-9]/)){//match es un método que permite buscar una expresión regular en un string
            hanleNumberClick(button.value)
        }else{
            handleOperatorClick(button.value)
        }
    })
})

btnEqual.addEventListener('Click',calculateResult())
btnDelete.addEventListener('Click', handleDelete())
btnReset.addEventListener('Click', ()=>{
    currentInput = '';
    previousResult = '';
    updateDisplay('0');
    resultDisplay.textContent = '0';
})







