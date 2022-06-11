//<-------------REDUCE------------->
// --> Reduce all the elements in an array into a single value
let arr = [2, 3, 4, 5, 6]

let addition = arr.reduce(function (sum, value) {
    let updatedSum = sum + value
    return updatedSum
}, 0)

console.log(addition)

//Product
let product = arr.reduce(function (acc, value) {
    let updatedProduct = acc * value
    return updatedProduct
}, 1)

console.log(product)

//Question 
//From the Transactions Array filter out positive Elements and Calculate the total amount
//Use filter and Reduce to Achieve this


const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]

let balance = transactions.filter(function(amount){
    return amount > 0
}).reduce(function(sum, amount){
        return sum + amount
},0)

console.log(balance)