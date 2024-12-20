class Vehicle {
  #name //hash tag make private valuue we cannot update directly
  constructor(name, model) {
    this.#name = name;
    this.model = model;
  }

  #showData() {
    console.log(`Vehicle Type: ${this.#name} Model: ${this.model}`);
  }

  outerShowData(){
    this.#showData()
  }
}

class Car extends Vehicle {
  constructor(name, model, speed) {
    
    super(name, model);
    this.speed = speed;
  
  }

  showSpeed() {
    console.log(`Car Speed: ${this.speed} km/h`);
  }
}


let mercedes = new Car("mercedes","maybach","200")
console.log(mercedes)

// mercedes.showSpeed()
// mercedes.showData()

mercedes.name = "audi"

mercedes.showData()

// console.log(mercedes)


