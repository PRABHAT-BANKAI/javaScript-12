// function Wallet(userName,balance,currency){
//   this.userName = userName;
//   this.balance = balance;
//   this.currency = currency;
  

// }
// Wallet.prototype.addMoney=function(money){
//  this.balance +=money
// }



// let satya = new Wallet("satya",100000,"rupees")

// console.log(satya)

// satya.addMoney(50000)
// console.log(satya)


// *Question:* Write a constructor function `Weather` that creates a weather object with properties like `city`, `temperature`, `humidity`, and `forecast`. Create a method to update the forecast.
// *Hint:* Use the constructor to set initial values, and add a method to update properties.


function Weather(city,temperature,humidity,forecast){
  this.city = city;
  this.temperature = temperature;
  this.humidity = humidity;
  this.forecast = forecast;
}

Weather.prototype.showForecast = function(){
  console.log(`The weather forecast for ${this.city} is ${this.forecast}`);
}

let Delhi = new Weather("delhi",34,115,"sunny")

console.log(Delhi)

Delhi.showForecast()