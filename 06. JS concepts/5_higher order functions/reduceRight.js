// This will work as Reduce, the only thing is that it iterate over the rray from right to left
let arr = [2, 3, 4, 5, 6]

let sumFromRight = arr.reduceRight(function(acc, value){ 
    let updatedSum =  acc + value
    console.log(updatedSum)
    return updatedSum
}, 0)

console.log(sumFromRight)