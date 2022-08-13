console.log("Welcome to Currency Converter!");
console.log(`1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);

let currencies = {
  USD: 1,
  JPY: 113.5,
  EUR: 0.89,
  RUB: 74.36,
  GBP: 0.75
}

while (true) {
  console.log("What do you want to do?");
  console.log("1-Convert currencies 2-Exit program");

  let input = require('sync-input');
  let action = Number(input());
    
    if (action === 1) {
      console.log(`What do you want to convert?`);

let input = require('sync-input'); 

let fromCurrencyInput = input(`From: `);
let fromCurrency = fromCurrencyInput.toUpperCase();

if (fromCurrency in currencies) {
  let toCurrencyInput = input(`To: `);
  let toCurrency = toCurrencyInput.toUpperCase();
  
  if (toCurrency in currencies) {
    let amount = input(`Amount: `);
    if (isNaN(amount)) {
    console.log("The amount has to be a number");
  } else if (amount > 0) {
    console.log(`Result: ${amount} ${fromCurrency} equals ${(amount / currencies[fromCurrency] * currencies[toCurrency]).toFixed(4)} ${toCurrency}`);
  } else if (amount < 0) {
    console.log("The amount cannot be less than 1");
  }
  
} else {
  console.log("Unknown currency");
}

} else {
  console.log("Unknown currency");
}
    } else if (action === 2) {
    console.log("Have a nice day!");
    break;
    
  } else {
      console.log("Unknown input");
      continue;
    }
}