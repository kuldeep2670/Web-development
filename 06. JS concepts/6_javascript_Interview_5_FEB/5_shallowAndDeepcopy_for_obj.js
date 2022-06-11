// let obj = {
//     name: ' adam',
//     age: 23
// }


// //shallow copy
// let newObj = {...obj}
// newObj.name = 'kuldeep'

// console.log(obj)
// console.log(newObj)


let person  = {
    name: 'Kuldeep',
    age: 20,
    hobbies: ['sports', 'coding', 'music']
}


//let newPerson = JSON.parse(JSON.stringify(person))  //deep copy
let newPerson = Object.assign({}, person) //shallow copy
newPerson.age = 22
newPerson.hobbies[0] = 'flying drones'

console.log(person)
console.log(newPerson)