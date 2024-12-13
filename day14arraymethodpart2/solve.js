// // duplicate find

// let array = [5, 3, 8, 5, 1, 3, 7];

// let object = {};
// for (let index = 0; index < array.length; index++) {
//   if (object[array[index]] == undefined) {
//     object[array[index]] = 1;
//   } else {
//     object[array[index]]++;
//   }
// }

// console.log(object);

// for(let key in object) {
//   if(object[key]>1){
//     console.log(key);
//   }
// }



console.log(123+123+"123")
console.log("245"+123)// concatinate

console.log(123+123+ +"1 23")  


console.log(123-false)//implicit  // explicit
console.log(123-true)



console.log([1,2,3]== "1,2,3")



const array2 = [1,2,3]
const result =array2.join("")
console.log(result)


let string = "javascript"

const resultString = string.split("")
console.log(resultString)


let value = "      javascript     "
const valueResult =value.trim()
console.log(valueResult)