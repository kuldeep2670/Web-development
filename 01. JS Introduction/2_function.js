// normal fuction

// function sayHI(){
//     console.log("function said hello")
// } // function declaration

// sayHI() // functon invokation

// parametrized function

// function add(a, b){
//     console.log("The addition is:", a + b)
// }

// add(2, 3)

// using return
// function multiply(a, b){
//     return a*b
// }

// // console.log(multiply(3, 5))
// let mul = multiply(3, 5)
// console.log(mul)

//functions as first class citizens

let sayHi = function(){  // anonymous functions
    console.log("hi") // in JS you can assign a function to a variable and can call it
} // function expression
sayHi()


// IIFE( Immedialtely Invoked Function Expression)

let add = (function(a, b){
    return a + b     //console.log(a+b)
})(10, 20)

console.log(add)

