// oops object oriented programming structure

// encapsulation
// inheritence
// Polymorphism
// abstraction

// factory function

function Animal(name, color, species) {
  let object = {};
  object.name = name;
  object.color = color;
  object.species = species;
  object.eat = function () {
    console.log(`${this.name} is carnivorous`); //this keyword refers object in function
  };

  return object;
}

let dog = Animal("dog", "black", "germanSheperd");

console.log(dog.name);

console.log(dog.color);

console.log(dog);
let cat = Animal("cat", "brown", "street");

console.log(cat);


