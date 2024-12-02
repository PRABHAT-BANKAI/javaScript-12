// snippet syntax
// let a = 1
// for(initinallizaiton ;conditions ;increment++ ){
//   // block scope

// }
// let b = 5 global scope
// let b = 9
// {
//block scope

// var b = 5; //  when you use var keyword

// }
// console.log(b);

// for(initinallizaiton ;conditions ;increment++ ){
//   // block scope

// }

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 1,  1<= 10, 1print,i++
// 2, 2<= 10, 2print,i++
// 3, 3<= 10, 3print,i++
// 9, 9<= 10, 9print,i++
// 10, 10<= 10, 10print,i++
//11 , 11<= 10 condition "false" when condition is false in for loop so come out from the loop

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 1) {
    // 1% 2 == 1
    console.log(`${i} is odd number`);
  } else {
    console.log(`${i} is even number`);
  }
}

//concatenate  console.log("123" + 12) output asd12 , "12312"

// 1
// 12
// 123
// 1234
// 12345

let string = "";
for (let i = 1; i <= 5; i++) {
  string += i;

}
console.log(string);

// *
// **
// ***
// ****
// *****


let sum = 0

for(let i=1;i<=50;i++){
  sum = sum+i
  
}
console.log(sum)


for(let i= 20 ;i>=1;i--){
  console.log(i)
}
