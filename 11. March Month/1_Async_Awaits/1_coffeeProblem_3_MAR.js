function placeOrder(drink) {
    return new Promise(function (resolve, reject) {
        if (drink == "coffee") {
            resolve('Order for coffee')
        } else {
            reject("Order cannot be placed")
        }
    })
}

function orderProcess(order) {
    return new Promise(function (resolve) {
        console.log("Order is being Processed")
        resolve(`${order} Served`)
    })
}

//<-----------Promisifieeeed Solution---------------->
// placeOrder('coffee').then(function (demand) {
//     console.log(demand)
//     let orderIsProcessed = orderProcess(demand)
//     return orderIsProcessed
// }).then(function (orderServed) {
//     console.log(orderServed)
// }).catch(function(err){
//     console.log(err)
// })

//<------------Aysnc Await Solution------------------->
async function serveOrder() {
    try {
        let orderPlaced = await placeOrder("coffee")
        console.log(orderPlaced)  // order for coffee
        let orderprocessed = await orderProcess(orderPlaced)
        console.log(orderprocessed)
    } catch (error) {
        console.log(error)
    }
}

serveOrder()