function updatePhoneTotalPrice(newPhoneNumber){
    const phonePrice = document.getElementById('phone-price');
    phonePrice.innerText = newPhoneNumber * 1219;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updateNumber('phone-number-field',true);
    updatePhoneTotalPrice(newPhoneNumber);
    const phonePriceTotal = getTextElementValueById('phone-price');
    const casePriceTotal = getTextElementValueById('case-price-total');
    const subTotal = phonePriceTotal + casePriceTotal;
    totalCalculationPart('sub-total', subTotal);
    const taxString = (subTotal * 0.1).toFixed(2);
    const tax = parseFloat(taxString)
    totalCalculationPart('tax', tax);
    const fixedTotal = subTotal + tax;
    totalCalculationPart('total', fixedTotal);
});
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updateNumber('phone-number-field',false);
    updatePhoneTotalPrice(newPhoneNumber);
    const phonePriceTotal = getTextElementValueById('phone-price');
    const casePriceTotal = getTextElementValueById('case-price-total');
    const subTotal = phonePriceTotal + casePriceTotal;
    totalCalculationPart('sub-total', subTotal);
    const taxString = (subTotal * 0.1).toFixed(2);
    const tax = parseFloat(taxString)
    totalCalculationPart('tax', tax);
    const fixedTotal = subTotal + tax;
    totalCalculationPart('total', fixedTotal);
});