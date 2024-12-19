// inhertitence in oops  // constructor function




function  Vehicle(vehicleType,model){
  this.vehicleType = vehicleType;
  this.model = model;
}

Vehicle.prototype.showData = function(){
  console.log(`Vehicle Type: ${this.vehicleType} Model: ${this.model}`);
}


Car.prototype = Object.create(Vehicle.prototype);


function Car(vehicleType,model,speed){
  Vehicle.call(this,vehicleType,model); // in first argument always send a object or "this"
  this.speed = speed;
}



Car.prototype.speedShow = function(){
  console.log(`Speed of car: ${this.speed} km/hr`);
}



let audi = new Car("audi","Q3","140")

audi.speedShow()

audi.showData() 
console.log(audi)





