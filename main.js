const currencyElm = document.querySelectorAll('.currency');
const amountElm = document.querySelector('.amount');
const resultElm = document.querySelector('.result');
const currencyConverterElm = document.querySelector('.convert-btn');

//get data from api
fetch(`https://api.frankfurter.app/currencies`)
.then((res) => res.json())
.then((data) =>{
   // console.log(data)
    display(data);
});

//display data
function display(data){
    const entries = Object.entries(data);
    for(let i=0; i<entries.length; i++){
        currencyElm[0].innerHTML += `<option value='${entries[i][0]}'>${entries[i][0]}</option>`;
        currencyElm[1].innerHTML += `<option value='${entries[i][0]}'>${entries[i][0]}</option>`;
    }
}

//get value
currencyConverterElm.addEventListener('click', (e) =>{
    e.preventDefault()
    let currency1 = currencyElm[0].value; 
    let currency2 = currencyElm[1].value;
    let amount_value = amountElm.value;
    
    //condition for same currency
    if(currency1,currency2,amount_value){
        convert(currency1,currency2,amount_value)
    }else{
        alert(`Choose Different Currencies`)
    }
});

//currency convert
function  convert(currency1,currency2,amount_value){
    fetch( `https://api.frankfurter.app/latest?amount=${amount_value}&from=${currency1}&to=${currency2}`)
    .then((response) => response.json())
    .then((data) =>{
        resultElm.value = Object.values(data.rates)[0];
    });

}
