// **Higher order functions** are functions that operate on other functions,
// either by taking them as arguments or by returning them.
//  In simple words, A Higher-Order function is a function
//  that receives a function as an argument or returns the function as output.

let arr = [2, 5, 9, 8, 15, 11, 6];

//<--------------- Map function -------------->
/* map is itself a function
   map takes a callback function as an arg
   map will call the callback functions as many times as the elements in the array
   map will process every value and will apply the instructin that inside the callback functions
   map returns a new array 
*/

// let sqarr = arr.map(function squarer(v) {
//     return v * v;
// });
// console.log(sqarr);
// console.log(arr);

//print names using the map function
// let nameArr = ["kuldeep", "singh", "kalsi"];
// let nameArr2 = nameArr.map(function (n) {
//     return n;
// });
// console.log(nameArr2);

//using map function , take out first name and lastname separately
// let nameArr = ["Vishal Kumar", "Vaibahv Rawal", "Anmol Taneja"];
// let modifiedString = nameArr.map(function first(n) {
//     let partOfName = n.split(" ");
//     return partOfName;
// });
// console.log(modifiedString);


//inr to usd
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrToUsd = 74;
let transactioninUSD = transactions.map(function usdtoinr(n){
    return (n/inrToUsd).toFixed(1);
})
console.log(transactioninUSD);