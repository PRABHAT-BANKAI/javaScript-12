// what is promise in javascript?     fetch nature is promise //async await

//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Promise constructor takes a single argument: a function that accepts two arguments: resolve and reject. These arguments are functions that you use to fulfill the promise's eventual completion or failure.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

let promise = new Promise((resolve, reject) => {
  if (4 % 2 == 1) {
 setTimeout(()=>{
  resolve("Even number");
 },5000)
  } else {
    reject("Odd number");
  }
});

promise
  .then((res) => {
    console.log(res, "Successful");
  })
  .catch((err) => {
    console.log(err,"error");
  });


  // await always use with async keyword 

  async function cal(){
 try{
  let result = await promise
  console.log(result,"result")
 }catch(error){
console.log(error,"trycatch")
 }
  }

  cal();