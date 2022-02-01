const fs = require('fs')
/*--------------------------------------------------------------------------------------
==>callback function --> any function that is passed as an argument to another function
                         is known as a callback function
---------------------------------------------------------------------------------------*/
// function printFirstName(firstName, cb, cb2){
//     console.log(firstName)
//     cb('singh')
//     cb2(20)
// }

// function printLastName(lastName){
//     console.log(lastName)
// }

// function printAge(age){
//     console.log(age)
// }

// printFirstName('kuldeep', printLastName, printAge)

/*<-----------Synchronous way of reading file------------->*/
// console.log('before')

// let data = fs.readFileSync('f1.txt')

// console.log(' ' + data)

// console.log('after')

/*<---------Asynchronous way of reading file----------> */
console.log('before')

fs.readFile('f1.txt', cb) //readFile is async function
fs.readFile('f2.txt', cb2)

function cb(error, data){  //error as first parameter--> error first callbacks
    if(error){
        console.log(error)
    } 
    console.log(' ' + data)
}
function cb2(error, data){  
    if(error){
        console.log(error)
    } 
    console.log(' ' + data)
}
console.log('after')
