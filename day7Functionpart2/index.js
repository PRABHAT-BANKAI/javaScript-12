// // FUNCTION WITH FOUR WAYS create

// let number = 15;

// number = "hello world";
// console.log(number);

// console.log("one");

// console.log("two");

// console.log("three");

// console.log("four");

// // four
// // one
// // three
// // ten

// // normal function

// print1(12,3);//arguments
// function print1(a,b) { //parameters
//   console.log(a+b);
// }
// function print2() {
//   console.log("two");
// }
// function print10() {
//   console.log("ten");
// }
// function print3() {
//   console.log("three");
// }
// print3();
// print10();
// print1();
// print2();

// // variable function

// let value ;
// console.log(value);

// let show = function () {  //anonymous function
//   console.log("variable function");
// };

// show()

// // arrow function
// let arrowShow =(a,b)=>{ //anonymous function
//   console.log(a-b);
// }

// arrowShow(15,60)

sum(20, 2, 3);
function sum(a, b, c) {
  console.log(a + b + c);
}

sum(1, 2, 3);

function multi(a, b, c) {
  console.log(a * b * c);
}

multi(1, 2, 3);

function division(a, b) {
  console.log(a / b);
}
division(50, 5);

function modolus(a, b) {
  console.log(a % b);
}

modolus(13, 5);

console.log(5 ** 3);

function output() {
  // function create a block  and this function also called nested function
  console.log("output function");
  function inner() {
    console.log("innerfunction");
  }
  inner();
}

output();

function game() {
  // when you didn't return anything javascript by default return undefined
  return "hi from game";
}

console.log(game());

function adding(a, b) {
  return a + b;
}

let store = adding(12, 5);
console.log(adding(12, 3));

