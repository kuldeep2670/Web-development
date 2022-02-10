// let arr = [1, 2, 3]
// console.log(arr, typeof(arr))// object

// let obj = {
//     name: 'kuldeep',
//     age: 23

// }
// console.log(obj, typeof(obj))// object

// function greet(){
//     console.log('Hello')
// }

// console.log(greet, typeof(greet))



let firstPerson = {
    name : 'kuldeep',
    age : '20'
}
let secondPerson = firstPerson
firstPerson.name = 'singh'  //same as secondPerson.name = 'singh'

console.log(firstPerson)
console.log(secondPerson)