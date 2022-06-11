let arr = [1, 2, 3, 4]

let copyArr = arr

copyArr[1] = 4;
console.log(arr) //[ 1, 4, 3, 4 ]
console.log(copyArr) //[ 1, 4, 3, 4 ]



//Shallow copy is a upper level copy and it does not handle nested elements
//1.<-----------------Spread operator method--------------------------->
// let sports = ['cricket', 'Football', 'Swimming',{a:'hockey', b:'tennis'}]

// let copySports = [...sports]  //spread operator
// copySports[1] = 'Baseball'
// copySports[3]['a'] = 'BasketBall'

// console.log('Original Sports array: ', sports)
// console.log('Copy sports array:', copySports)

// Original Sports array:  [ 'cricket', 'Football', 'Swimming', { a: 'BasketBall', b: 'tennis' } ]
// Copy sports array: [ 'cricket', 'Baseball', 'Swimming', { a: 'BasketBall', b: 'tennis' } ]



// shallow copy from the 2. Array.from method
// let sports = ['cricket', 'Football', 'Swimming',{a:'hockey', b:'tennis'}]

// let copySports = Array.from(sports) //Array.from() method
// copySports[1] = 'Baseball'
// copySports[3]['a'] = 'BasketBall'

// console.log('Original Sports array: ', sports)
// console.log('Copy sports array:', copySports)
// Original Sports array:  [ 'cricket', 'Football', 'Swimming', { a: 'BasketBall', b: 'tennis' } ]
// Copy sports array: [ 'cricket', 'Baseball', 'Swimming', { a: 'BasketBall', b: 'tennis' } ]


//<------3.slice method for shallow copy------------>
// let sports = ['cricket', 'Football', 'Swimming',{a:'hockey', b:'tennis'}]

// let copySports = sports.slice(0)  //slice method
// copySports[1] = 'Baseball'
// copySports[3]['a'] = 'BasketBall'

// console.log('Original Sports array: ', sports)
// console.log('Copy sports array:', copySports)
// Original Sports array:  [ 'cricket', 'Football', 'Swimming', { a: 'BasketBall', b: 'tennis' } ]
// Copy sports array: [ 'cricket', 'Baseball', 'Swimming', { a: 'BasketBall', b: 'tennis' } ]



//<--------------------Deep copy--------------------->
let sports = ['cricket', 'Football', 'Swimming',{a:'hockey', b:'tennis'}]

let copySports = JSON.parse(JSON.stringify(sports))
copySports[1] = 'Baseball'
copySports[3]['a'] = 'BasketBall'

console.log('Original Sports array: ', sports)
console.log('Copy sports array:', copySports)
// Original Sports array:  [ 'cricket', 'Football', 'Swimming', { a: 'hockey', b: 'tennis' } ]
// Copy sports array: [ 'cricket', 'Baseball', 'Swimming', { a: 'BasketBall', b: 'tennis' } ]

















