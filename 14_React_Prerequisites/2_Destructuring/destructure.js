// // Array

// let arr = ['Hi', 'I', 'am', 'Kuldeep']

// // let a = arr[1] //I
// // let b = arr[0]  //Hi

// //Destructuring
// let [a, b, c, d, e = 'Singh'] = arr
// console.log(a, b, c, d, e)

// //Objects
// let obj = {
//     name: 'adam',
//     state: 'New York',
//     pincode: 123456
// }

// let {name, pincode, state} = obj
// console.log(name, state, pincode)

// Nested Objects
let obj = {
    name: 'adam',
    address: {
        country: 'USA',
        state: {
            stateName: 'New York',
            pincode: 123456
        }
    }
}

let{name} = obj

let {address: {country:coun}, address:{state: {pincode}}} = obj  // alternate name using colon(:)

let {address: {state: {stateName}}} = obj

console.log(coun)

console.log(pincode)

console.log(stateName)

console.log(name)