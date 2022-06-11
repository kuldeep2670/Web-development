// let arr = [1, 2, 3, 4]

// let arr2 = arr

// arr.push(5)

// // console.log(arr)  //[1, 2, 3, 4, 5]
// // console.log(arr2)  //[1, 2, 3, 4, 5]

// console.log(...arr)  //1 2 3 4 5 
// console.log(arr2)    //[1, 2, 3, 4, 5]


//spread operator (...) 
//It allows us to quickly copy all or part of an existing array or object into another array or object.

let arr = [1, 2, 3, 4]

let arr2 = [...arr]

arr.push(5)
arr[2] = 23

console.log(arr)    //[ 1, 2, 23, 4, 5 ]
console.log(arr2)   //[ 1, 2, 3, 4 ]