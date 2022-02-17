
// let myPromise = new Promise(function(resolve, reject){ //two callback functions 
//         //Your code will go here
// })

let promise = new Promise(function (resolve, reject) {
    const a = 2
    const b = 2

    if (a == b) {
        resolve(" yes values are equal")
    } else {
        reject(" no the values are not equal")
    }
})

// promise.then(function(){
//     console.log('Equal')
// })

// promise.catch(function(){
//     console.log('Not equal')
// })

// chaining
promise.then(function (data) {
    console.log(data)
}).catch(function (err) {
    console.log(err)
})