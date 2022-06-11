// let fs = require('fs')

// console.log('before')

// let f1p = fs.promises.readFile('f1.txt')

// f1p.then(cb1)

// function cb1(data){
//     console.log('File data-->' + data)
    
//     let f2p = fs.promises.readFile('f2.txt')
//     f2p.then(cb2)
// }

// function cb2(data){
//     console.log('File data-->' + data)
    
//     let f3p = fs.promises.readFile('f3.txt')
//     f3p.then(cb3)
// }

// function cb3(data){
//     console.log('File data-->' + data)
// }

// console.log('after')

//Improvement-->

let fs = require('fs')

console.log('before')

let f1p = fs.promises.readFile('f1.txt')

f1p.then(cb1).then(cb2).then(cb3).catch(function(err){
    console.log(err)
})

function cb1(data){
    console.log('File data-->' + data)
    
    let f2p = fs.promises.readFile('f2.txt')
    return f2p
}

function cb2(data){
    console.log('File data-->' + data)
    
    let f3p = fs.promises.readFile('f3.txt')
    return f3p
}

function cb3(data){
    console.log('File data-->' + data)
}

console.log('after')


