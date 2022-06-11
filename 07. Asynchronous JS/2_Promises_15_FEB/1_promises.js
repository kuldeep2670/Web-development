//javacript treats promises as objects
const fs = require('fs')

console.log('Before')

// fs.readFile('f1.txt', function(err, data){
//     if(err){
//         console.log(err)
//     }
//     console.log('File Data -->' + data)
// })

let promise = fs.promises.readFile('f1.txt') // Pending stage
//console.log(promise)


promise.then(function(data){ // Promise Fulfilled
    console.log("File Data-->" + data)
})

promise.catch(function(err){ // promise rejected
    console.log(err)
})
console.log('After')




