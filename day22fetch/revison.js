// asynchronous or synchronous


console.log(1)

setTimeout(() => {
  console.log(2)
}, 0)

async function show (){
  let dogData =  await fetch("https://dog.ceo/api/breeds/image/random")//fetch have promise nature
  let Data = await dogData.json()
  console.log(data)
}

show()

console.log(3)