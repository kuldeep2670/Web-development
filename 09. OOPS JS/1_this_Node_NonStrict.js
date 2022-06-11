//<------------------     Node --> Non Strict Mode    --------------------->
//  1...
//console.log(this)  //global area   output--> {} =>empty object


//2.... Inside a function
// function f(){
//     console.log(this)
// }
// f()  // returns global object


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
// obj2.f()  //return global object


//Summary-->

// context : node + non strict

//global area ==> empty object
// function ==> global object

// obj -> function ==> object itself

// obj -> function -> function  ==> global object
