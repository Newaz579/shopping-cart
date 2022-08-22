function updateNumber(numberField,isIncrease){
    const caseNumberField = document.getElementById(numberField);
    const prevCaseNumber = parseInt(caseNumberField.value);
    let newCaseNumber;
    if(isIncrease){
        newCaseNumber = prevCaseNumber + 1;
    }
    else{
        newCaseNumber = prevCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function getTextElementValueById(elementValue){
    const textElement = document.getElementById(elementValue);
    return parseInt(textElement.innerText);
}

function totalCalculationPart(subTotalId, subTotal){
    const total = document.getElementById(subTotalId);
    total.innerText = subTotal;
}