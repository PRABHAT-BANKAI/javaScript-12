// Array With Functions
//  (map ,filter, foreach, indexof, findindex ,includes, every, some)

let array = [12, 1, 4, 5, 6];

let sum = 0;
array.forEach((element, index) => {
  if (index <= 2) {
    sum += element;
  }
});
console.log(sum);

console.log(typeof array);

// map internally create new array then update the values with new updated values and then return the array of updated values

const result = array.map((element, index) => {
  // [24,2,8,10,12]
  return element + "string";
});

console.log(result);

const arr2 = [12, 5, 65, 25, 55, 66, 88];

const filterValue = arr2.filter((item, i) => {
  //[65,55,66,88]
  return item % 2 == 0;
});
console.log(filterValue);

let number = 89;
let count = 0;
for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    count++;
  }
}
console.log(count);
if (count == 2) {
  console.log("Number is prime");
} else {
  console.log("Number is not prime");
}

const arr3 = [12, 5, 65, 25, 55, 66, 88];

const indexofarray3 = arr3.indexOf(5);
console.log(indexofarray3);

const findIndexarray3 = arr3.findIndex((item, index) => {
  return item > 250;
});
console.log(findIndexarray3);

let array4 = ["pubg", "bgmi", "freefire", "COD", "subwaySurfers"];

const result3 = array4.includes("freefire");
console.log(result3);

let arr5 = [65, 65, 2, 47, 98];

const result5 = arr5.every((item, index) => {
  return item == 65;
});
console.log(result5);

const result6 = arr5.some((item, index) => {
  return item == 2;
});

console.log(result6);