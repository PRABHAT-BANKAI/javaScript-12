let userName = "Batman";
let password = "gothamcity";

// if (userName == "Batman") {
//   if (password == "gothamcity") {
//     console.log("Login Successful !");
//   }
//   else {
//     console.log("Incorrect password");
//   }
// } else {
//   console.log("Invalid username and password");
// }

if (userName == "Batman" && password == "gothamcity") {
  console.log("Login Successful!");
} else {
  console.log("Invalid username and password");
}

let a = 30;
let b = 50;
let c = 70;

// if (a > b) {
//   if (a > c) {
//     console.log("a is the largest number");
//   } else {
//     console.log("c is the largest number");
//   }
// } else {
//   if (b > c) {
//     console.log("b is the largest number");
//   } else {
//     console.log("c is the largest number");
//   }
// }

if (a < b) {
  if (a < c) {
    console.log("a is the smallest number");
  } else {
    console.log("c is the smallest number");
  }
} else {
  if (b < c) {
    console.log("b is the smallest number");
  } else {
    console.log("c is the smallest number");
  }
}
