let array = [1,2,3,4,5,6]

let array2 = [...array,1,5,7,8,] //spread operator
console.log(array2)


console.log(array2==array)


// rest operator
function print(a,b,c,...d){
console.log(a,b,c,d)
}
print(1,2,3,4,5,6,7,8,9)


if(44%2==0){
  console.log("Even")
}else{
  console.log("Odd")
 }


//  ternary operator

44%2==0?console.log("Even"):console.log("odd")