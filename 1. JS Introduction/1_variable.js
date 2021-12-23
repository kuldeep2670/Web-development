// variable declaration
// var , let, const
// datatypes in javascript - number, string, boolean, undefined, null
// var
// var a = 2
// console.log(a)
// var a = "I am a student"
// console.log(a)

// JS is a dynamically type language( means variable type changes or datatype is not specified)

//var has some problems

// 1. redeclaration 
// var a = 2
// console.log(a)
// var a = "I am a student"
// console.log(a)

// overcome Redeclaration
//use let keyword

// let b = 2
// console.log(b)
// b = "bye"   // reassigning is allowed in let but redeclaration is not allowed in let
// console.log(b);

// loops

// for loop 
// Prime number

// var flag = true
// var num = 13

// for(var i = 2; i*i <= num; i++){
//     if(num%i == 0){
//         flag = false
//         break
//     }
// }
// if(flag == true)
//     console.log("Number is Prime")
// else
//     console.log("Number is not Prime")

//2. problem with var -- Scoping
// if(10%2 == 0){
//     var a = 2;  
//     console.log("Inside block" , a)
// }
// console.log("outside block" , a)

// if(10%2 == 0){
//     let a = 2;  
//     console.log(a)
// }
// console.log(a)  // a is not existed outside the if else block 

// const
const a = 2;  //Redeclaration and reassigning is not allowed
console.log(a)
