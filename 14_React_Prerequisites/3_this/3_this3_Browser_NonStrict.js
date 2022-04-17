// < ---------------     Browser -> Non -Strict mode    ------------>

//  1...Global area
//console.log(this)  //window object


//2.... Inside a function
// function f(){
//     console.log(this)
// }
// f()  // returns window object


//3... Inside a function inside an object
// let obj = {
//     name: 'Kuldeep',
//     f: function(){
//         console.log(this)
//     }
// }
// obj.f()  // it will return the object itself


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
// obj2.f()  //return window object