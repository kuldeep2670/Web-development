//<------------------------ARROW FUNCTION-------------------->

// write a fucntion to add two numbers and print their sum(function expression)

// let add = (a, b)=>{         //  => fat arrow //use fat arrow instead of using function
//     console.log(a+b)
// }
// add(3, 4)



// //Example 1
// var regularFuntion = function (name) {
//     console.log(`I am ${name}`);
// };
// let arrowFunction = name => console.log(`I am ${name}`);  //single parameter no brackets 
//                             //but brackets are used when there are more than one parameters

// regularFuntion("Adam");
// arrowFunction("Steve");


// //example 2
// function test1(){
//     console.log(this)  //global object
// }
// let test = () => {
//     console.log(this)  //empty object {} in both strict and non strict mode
// }
// test()



// let person = {
//     name: 'Adam',
//     age: 27,
//     showDetails: function(){
//         console.log(this.name + ' ' + this.age)
//     },
//     showDetailsArrow: () => {
//         console.log(this.name + ' ' + this.age)
//     } 
// }
// person.showDetails()
// person.showDetailsArrow()

//arrow function remove the use of this 
//syntax is easy to write




