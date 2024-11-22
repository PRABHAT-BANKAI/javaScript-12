// Types Of Operator
// Arithmetic operators
// Assignment operators
// Comparison operators
// Logical operators
// conversion with console.log and innerHTML

// Arithmetic operators
//+
//-
// *
// /
// % modulus
// addition

console.log(12 + 78);

let a = 55;
let b = 55;
console.log(a + b);

// substraction
console.log(-7 - 15);

// multiplication
console.log(5 * 25);

//exponentiation or (power of number)
console.log(2 ** 3);

//division
console.log(50 / 2);

// modulus operator
console.log(53 % 2); // modulus return reminder

// prefix operator
// ++number   --number
//postfix operator
// number++   number--
// Assignment operators
//  =
// +=
// -=
// %=
// *=
// /=

let value = 55;

let sum = 10;
// sum = sum + 55;
sum += 55;
console.log(sum, "sum");

sum -= 5;
console.log(sum, "subract");

// sum = sum % 2;
sum %= 2;
console.log(sum, "reminder");

// Comparison operators
// >
// <
// >=
// <=
//  ==
//   !=
//   ===
//   !==

console.log(5 > 1); // true
console.log(5 < 1); // false
console.log(5 >= 7); // false

console.log(5 == 6); // false

console.log("5" === 5, "value"); // false

console.log(7 != 7); //false
console.log(7 !== "7");

// Logical operators

// && (and) return false and false value
// || (or)

console.log(5 > 1 && 4 < 1 && 9 > 1); // false
console.log(5 > 1 && 6 > 1 && 9 > 1); // true

console.log(5 < 1 || 4 < 1 || 9 > 1); //true

console.log(5 < 1 || 4 < 1 || 9 < 1); //false

console.log((4 < 1 && 9 < 1) || 5 > 1); //false

// false && 9 < 1
//5>1 || false

//4 < 1 && 9 < 1
//false

//swapping

let x = 10;
let y = 15;

let temp = 0;

temp = x; // temp = 10

x = y; // x= 15
y = temp; // y = 10

x = y+x  // 25
y = x-y // 10
x = x-y  //15
