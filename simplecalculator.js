let headerInput='';
function inputNumber(inputDigit){
    headerInput+=String(inputDigit);
    updateDisplay();
    return headerInput;
}

function updateDisplay(){
    let inputElement=document.querySelector('.display');
    inputElement.innerHTML=headerInput;
}

function clearHeader(){
    let inputElement=document.querySelector('.display');
    inputElement.innerHTML=0;
    headerInput='';
}

function calculate(headerInput){
    headerInput=eval(headerInput);
    document.querySelector('.display').innerHTML=headerInput;
    return headerInput;
}