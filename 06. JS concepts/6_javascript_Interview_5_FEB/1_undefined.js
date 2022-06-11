var a;
console.log(a)   //undefined 



function test(){
    return null  //explicitly assigned null
}
console.log(test())    //return null



let b = global.v;  //using a global object v whicch is not exist
console.log(b)   //undefined
 

let person = {
    name: 'adam',
    age: null
};

let p1 = person.name;  //p1 is string
let p2 = person.age; // p2 is null
let p3 = person.address;  // p3 is undefined
console.log(`${p1} is ${p2} years old from this address ${p3}`)

// whenever we dont assign value to variable it is undefined whereas null is passes as a value explicitly


//    Null vs undefined
//NULL explicitly tells that the value is empty
// undefined tells that the value is not assigned



let formobj = {
    firstName: 'kuldeep',
    middleName: null,
    lastName:'singh'
}

console.log(formobj.middleName)  //outputs null
console.log(formobj.age)  //undefined


