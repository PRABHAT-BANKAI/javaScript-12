class Animal{//class function
  constructor(name,color,species){
 this.name = name
 this.color = color
 this.species = species
  }
  eat(){
    console.log(`${this.name} is eating!`)
  }
  sound(sound){
    console.log(`${this.name} makes a ${sound}!`)
  }
}


const dog = new Animal("dog","black","huskey")
const cat = new Animal("cat","brown","persian")

console.log(dog)

dog.eat()

cat.eat()

console.log(dog.eat == cat.eat)


dog.sound("bark")

cat.sound("meow")