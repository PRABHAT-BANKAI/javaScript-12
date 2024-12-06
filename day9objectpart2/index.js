// Object with Array Objects
// Looping Array with object access with looping and conditions Make Quotes

let object = {
  name: "John",
  age: 30,
  hobbies: ["reading", "painting", "coding"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },

  // Nested Array with objects
  nestedArray: [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 40 },
  ],
};

for(let key in object){
  console.log(`${key} ---- ${object[key]}`)

}

let array = object.hobbies

for(let hobby of array){
  console.log(hobby)
}
