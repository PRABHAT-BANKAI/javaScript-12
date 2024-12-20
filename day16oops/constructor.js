function Animal(name,color,species){
  this.name = name
  this.color = color
  this.species = species

}

// function Dog(name,sound){
//   Animal.call(this,name)
  
// this.sound = sound

// }
Animal.prototype.eat = function(food){

  console.log(`${this.name} ${food} is eatiing!`)
}


const dog = new Animal("dog","black","huskey")
const cat = new Animal("cat","brown","persian")

console.log(dog)
console.log(cat)
dog.eat("bread")
cat.eat("rusk")

console.log(dog.eat === cat.eat) //true



let array = [1,2,3,4]

// Array.prototype.map= ()=>{
//   return 12
// }

const result = array.map((element)=>{
return element +5
})

console.log(result)








