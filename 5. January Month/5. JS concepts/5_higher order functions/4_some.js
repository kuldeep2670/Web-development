/* Some : condition check: to get true or false based on a condition
    It will return true if one or more than 1 element satisfies the conditon   
*/

const transactions = [-1000, -3000, 4000, -2000, -898, -3800, -4500];

let anydeposit = transactions.some(function(n){
    return n > 0
})

console.log(anydeposit)








