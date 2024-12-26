// synchronous

// asynchronous

// console.log("1"); // synchronous
// console.log("2");

// setTimeout(() => {
//   //set timeout nature  asynchronous
//   console.log("3");
// }, 7000);
// setTimeout(() => {
//   //set timeout nature  asynchronous
//   console.log("7");
// }, 5000);

// console.log("4");
let count = 5;
const id = setInterval(() => {
  console.log(count);
  if (count == 1) {
    clearInterval(id);
    console.log("stop");
  }

  count--;
}, 1000);

console.log("start");
