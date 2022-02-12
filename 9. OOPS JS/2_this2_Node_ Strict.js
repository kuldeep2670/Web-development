// < ---------------     Node -> Strict mode    ------------>
"use strict"
//  1...Global area
// console.log(this)  //global area   output--> {} =>empty object


//2.... Inside a function
// function f(){
//     console.log(this)
// }
// f()  // returns undefined


//3... Inside a function inside an object
// let obj = {
//     name: 'Kuldeep',
//     f: function(){
//         console.log(this)
//     }
// }
// obj.f()  //returns { name: 'Kuldeep', f: [Function: f] } ==> it will return the object itself


//4... Inside a function in a function inside an object
// let obj2 = {
//     name: 'Kuldeep',
//     f : function(){
//         function g(){
//             console.log(this)
//         }
//         g()        
//     }
// }
// obj2.f()  //return undefined

//Summary-->

// context : node +  strict

//global area ==> empty object
// function ==> undefined

// obj -> function ==> object itself
// obj -> function -> function  ==> undefined
