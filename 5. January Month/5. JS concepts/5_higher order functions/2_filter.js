/*  <----------------Filter -------------->
    Filter returns a new array containing array elements that matches a specified condition
    if the condition stands true it will filter out those elements and will presemt them in a new Array
 */

let arr = [2, 3, 4, 6, 34, 55, 23, 44];
//take out all the even numbers
let evenNoArr = arr.filter(function(n){
       return n % 2 == 0
})
console.log(evenNoArr)


const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
let profitArr = transactions.filter(function(n){
    return n > 0
})
console.log(profitArr)