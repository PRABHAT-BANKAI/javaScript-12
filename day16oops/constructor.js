function Animal(name,color,species){
  this.name = name
  this.color = color
  this.species = species
  this.eat = function(){
    console.log(`${this.name} is eatiing!`)
  }
}


const dog = new Animal("dog","black","huskey")
const cat = new Animal("cat","brown","persian")

console.log(dog)
console.log(cat)
dog.eat()
cat.eat()

console.log(dog.eat == cat.eat)





