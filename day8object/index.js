// JS Objects ( PPT) Object Property Object Methods
// object create key value pairs
// this keyword
// let userName = "puspa2"
let number = 1;
let data = {
  userName: "batman",
  city: "gotam city",
  age: 35,
  creadCard: {
    cardNumber: 1234567890123456,
    expirationDate: "02/22",
    cvv: 123,
    balance: 1000,
  },
  hobbies: ["reading", "cooking", "painting"],
  print: function () {
    console.log(this.userName, this.city, this.age, this.hobbies);
  },
};
console.log(data.userName);
console.log(data.hobbies[2]);
data.print();

const secondData = data;

console.log(secondData === data);

const object2 = {
  userName: "batman",
  city: "gotam city",
  age: 35,
  hobbies: ["reading", "cooking", "painting"],
};

// console.log(object2 === data)
console.log(object2);
object2.userName = "Robin";

console.log(object2);

// dot notation
// bracket notation

let student = {
  studentName: "henry",
  className: "12th",
  grade: 9,
  subjects: ["math", "science", "english"],
};

console.log(student.studentName, student.className);
console.log(student["studentName"]);

let alphabet = {
  a: "1",
  b: "2",
  c: "3",
  d: "4",
  e: "5",
};

console.log(Object.keys(alphabet));
console.log(Object.values(alphabet));

let array = ["a", "b", "c", "d", "e"]; //array[i]
//            0  ,  1 , 2 , 3 , 4

for (let i = 0; i <= array.length - 1; i++) {
  console.log(alphabet[array[i]]);
}
console.log(alphabet.d);

let employee = {
  userName: "john",
  age: 35,
  department: "marketing",
  salary: 50000,
};

Object.freeze(employee);
employee.userName = "smith";
employee.age = 45;

console.log(employee);


console.log(data.creadCard.balance)