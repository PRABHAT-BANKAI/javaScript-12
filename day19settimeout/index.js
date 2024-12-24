// SETTIMEOUT Modal show web page load 
// setInterval, clearinterval Automatic slider


// console.log("1")
// setTimeout(()=>{
//   console.log("4 setTimeout")
// },2000)//1000 1sec //10000 10sec
// console.log("2")
// setTimeout(()=>{
//   console.log("5 setTimeout")
// },1000)
// console.log("3")

//syncronous 
// asyncronous

// setTimeout nature is asynchronous
// setTimeout(()=>{
//   console.log("4 setTimeout")
// },5000)//1000 1sec //10000 10sec


// setInterval nature is  asynchronous
// const id =  setInterval(()=>{
//   console.log("setInterval")
//   clearInterval(id)// clear interval stop setInterval
// },2000)


// let count = 10

// const id = setInterval(()=>{
// console.log(`countdown : ${count}`)

// if(count == 0){
//   clearInterval(id)
// }
// count--
// },1000)


function inner(){
console.log("3")
setTimeout(()=>{
  console.log("4")
})
console.log("5")
}
function ouput(){
console.log("1")
inner()
console.log("2")
}

ouput()