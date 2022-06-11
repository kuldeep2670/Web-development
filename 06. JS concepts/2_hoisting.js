console.log(a)// undefined with var
//initialization error with let and const

//temporal dead zone --> it is just a area where if you try to access variables defined with let and const
// before their initialization you won't be able to do it

greet()
console.log(a)
var a = 2
// let a = 2

console.log(a)
function greet(){
    console.log('hello')
}