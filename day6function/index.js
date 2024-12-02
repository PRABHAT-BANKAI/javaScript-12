// parameters Function (with Arguments) Return type in function switch programs

function sum(a, b) {
  // parameters
  // console.log(a+b)

  return a + b;
}
// function return   undefined by default

sum(12, 3); // arguments

const result = sum(15, 5);
console.log(result);

console.log(sum(25, 25));

console.log(subtract(4, 6) + multi(2, 3));

function subtract(a, b) {
  return a - b;
}
function multi(a, b) {
  return a * b;
}

// function sum (){  normal function

// }

// sum()

//variable function

let resultValue = function () {
  // anonymous function
  console.log("hello variable function ");
};
resultValue();

//arrow function

let arrowFun = (a, b, c) => {
  console.log("hello arrow function ");

  console.log("hello arrow function  2 ");
};

console.log(arrowFun(12, 3, 5));

// switch (key) {
//   case value:

//     break;

//   default:
//     break;
// }

const expr = "Oranges";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.59 a pound.");
    break;
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

// another example of switch case
let light = "green";

switch (light) {
  case "green":
    console.log("go");
    break;
  case "orange":
    console.log("slow down");
    break;
  case "red":
    console.log("stop");
    break;

  default:
    console.log("Invalid light");
}


// find even 
// find odd 
// create a function with name of show   and print  "hello from show function"




