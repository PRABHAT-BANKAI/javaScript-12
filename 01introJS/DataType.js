//data type

//primitive type
// string
// number
// boolean //true and false //
// BigInt
// null
// undefined

//non primtive type (reference)
// Array
// Object
// function

let userName = "batman";
let number = 12345;
let boolean = true;
console.log(typeof typeof userName);

console.log(typeof typeof number);

console.log(typeof boolean);
// console.log(typeof NaN)

let value = 7384775985498734587987987n;
console.log(value);

const userAge = null;
console.log(userAge);

let hero;
console.log(hero);
console.log(null === undefined);

let array = ["apple", 12, true, "orange"]; // array and string  start with 0 index
//          0      1   2    3

console.log(array);
// console.log(array[10])

console.log(typeof array); // array typeof  object

// object create key value pairs
let object = {
  name: "superman",
  age: 30,
};

console.log(typeof object);
console.log(object.name);
console.log(object.age);

console.log("1");
console.log("2");
// console.log(vla)
console.log("3");
console.log("4");

//
let stringValue = "ball";
stringValue = 12345;

//c++
// syntax = "ball"
// stringValue = 12345

function print1() {
  console.log("print4");
}
function print2() {
  console.log("print1");
}
function print3() { // block
  console.log("print55");
}

print3()
print1()
print2()
