const fromAmountElement = document.querySelector('.amount');
const convertedAmountElement = document.querySelector('.convertedAmount');
const fromCurrencyElement = document.querySelector('.fromCurrency');
const toCurrencyElement = document.querySelector('.toCurrency');
const resultElement = document.querySelector('.result');

const countries = [
 { code: "USD", name:"United States Dolllar"},
{ code: "INR", name:"Indian Rupee"},
];

countries.forEach(country => {
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    option1.value =option2.value= country.code;
    option1.textContent= option2.textContent = `${country.code} (${country.name})`;
    fromCurrencyElement.appendChild(option1);
    fromCurrencyElement.appendChild(option2);
    //setting default values
    fromCurrencyElement.value="USD";
    toCurrencyElement.value="INR";
    
});