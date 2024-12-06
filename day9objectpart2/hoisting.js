// let var const

// {
//   let number = 12
// //block scope

// }
// console.log(number)

//var // global scope

// {
//   {
//     {
//       var number = 12;
//       console.log(number);
//       var number = 78;
//     }
//   }
//   //block scope
// }
// console.log(number);

// let value = 0;

// value = 15;

// const result = "student";
// result = "hello world";

//hoisting
// console.log(game)  // in let case  "temporal dead zone"

let game = "pubg";
console.log(game); // in let case "

console.log(game2);
var game2 = "COD"; // in var case in hoisting time variable name with var key word  so variable name assign with undefined
console.log(game2);

//global scope
//block scope
//function scope

var userName = "batman";

function show() { // function scope
 
  console.log(userName);
  var userName = "aquaman"
  console.log(userName)
}

show();

(function (){// IIFE   //Immediately Invoked Function Expression
console.log("IIFE")
})()