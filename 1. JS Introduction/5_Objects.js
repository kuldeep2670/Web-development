// // In JS objects are basically key value pair
// // To declare an object
// let obj = {} // object declaration

// let person ={
//     name: "kuldeep", //here name is the key and string is the value
//     age: 20,
//     phone: 12345
// }
// console.log(person)

let captain = {
    firstName: 'Steve',
    lastName: 'rogers',
    friends: ['bucky','tony','Dr Banner'],
    age: 102,
    isAvenger: true,
    address: {
        state : 'Brooklyn',
        city : 'New York'
    },
    sayHi : function fn(){
        console.log('Captain say Hi')
    }
}
// //console.log(captain)

// console.log(captain.firstName) // access a property of an object
// console.log(captain['firstName'])  //bracket notation and above is a dot notation

// console.log(captain.lastName)
// console.log(captain.age)
// console.log('My best friend is', captain.friends[0]) //accessing array elements from objects
// console.log(captain.address.state) // addressing nested objects key
// captain.sayHi()  //accessing functions in objects


// //loop---> for in loop
// for (let key in captain){
//     console.log("key :", key, "value :", captain[key])
// }
captain.isAvenger= false //update a property of an object
captain.movies = ['age of ultron', 'winter soldier']  //add new property to an object
delete captain.age  //delete a property of an object
console.log(captain)




