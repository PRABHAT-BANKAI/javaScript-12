function outter() { // closure function     // closure function created lexical environment
  console.log("outter function");
  let a = 5
  let b = 6

  function inner() {
    console.log("inner function");
    console.log("a: " + a);
    console.log("b: " + b);
  }
  a=1
  b=1
  return inner
}

// console.log(12+"4")


const innerFunction = outter();

// console.log(innerFunction);
innerFunction(); 

