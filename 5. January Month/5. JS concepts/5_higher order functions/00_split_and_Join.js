
//<---------------- SPLIT--------------------->

let str = 'pepcoder'
let partOfString = str.split('e')// [ 'p', 'pcod', 'r' ]
// split function will split a string according to passed parameter
// and will return the left and the right part in an array
console.log(partOfString) // [ 'p', 'pcod', 'r' ]

//<---------------- JOIN ------------------------>

let joinedString = partOfString.join('e')
//  Join function will take an array and it will fill the parameter after each element 
//  of the array with the passed parameter and will return the complete string
console.log(joinedString)  // pepcoder