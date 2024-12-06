// Types Of Operator
// Arithmetic operators
// Assignment operators
// Comparison operators
// Logical operators
// conversion with console.log and innerHTML

let number = 12;
number = 90;
console.log(12 + 4);
console.log(44 - 5);
console.log(23 % 2);
console.log(14 / 2);
console.log(3 ** 3);
console.log(3 * 4);

let sum = 10;

let a = 15;
// sum = sum +a
sum += a;

console.log(sum);

//-=
//"/="
// "%="
let temp = 2112;

temp %= 56;
console.log(temp);

console.log(12 == 12);
console.log("12" === 12); //strickly comparision
console.log(12 != 12);
console.log("12" !== 12);

console.log(12 > 11);
console.log(11 >= 11);
console.log(12 <= 11);

// logical operator
// && And
// || Or

console.log(12 > 4 && 5 == 5 && 5 < 8 && 45 > 5);

console.log(12 > 45 && 5 != 5 || 5 < 8 && 45 > 5);
// false ||true
// priority  // &&  then ||


//conversion 

let stringValue = "214235a56"
console.log(typeof stringValue)
const newValueNumber = Number(stringValue)// Boolean String 
console.log( newValueNumber)

let emptyString = ""

console.log(Number(emptyString))


// false =0
// true =1
//"" = false
//

console.log(true && 1 && 45 && "")