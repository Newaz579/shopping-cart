function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = document.getElementById('case-price-total');
    caseTotalPrice.innerText = newCaseNumber * 59;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    // console.log('case plus clicked');
    const newCaseNumber = updateNumber('case-number-field',true); //call from utilities.js file
    updateCaseTotalPrice(newCaseNumber);  
    const phonePriceTotal = getTextElementValueById('phone-price'); //call from utilities.js file
    const casePriceTotal = getTextElementValueById('case-price-total'); //call from utilities.js file
    const subTotal = phonePriceTotal + casePriceTotal;
    totalCalculationPart('sub-total', subTotal);  //call from utilities.js file
    const taxString = (subTotal * 0.1).toFixed(2);
    const tax = parseFloat(taxString)
    totalCalculationPart('tax', tax);
    const fixedTotal = subTotal + tax;
    totalCalculationPart('total', fixedTotal);
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateNumber('case-number-field', false); //call from utilities.js file
    updateCaseTotalPrice(newCaseNumber);
    const phonePriceTotal = getTextElementValueById('phone-price'); //call from utilities.js file
    const casePriceTotal = getTextElementValueById('case-price-total'); //call from utilities.js file
    const subTotal = phonePriceTotal + casePriceTotal;
    totalCalculationPart('sub-total', subTotal); //call from utilities.js file
    const taxString = (subTotal * 0.1).toFixed(2);
    const tax = parseFloat(taxString)
    totalCalculationPart('tax', tax);
    const fixedTotal = subTotal + tax;
    totalCalculationPart('total', fixedTotal);
})

//