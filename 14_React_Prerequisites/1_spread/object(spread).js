let obj = {
    name : 'adam',
    address: {
        country: 'USA',
        state: {
            stateName: 'New York',
            pincode: 123456
        }
    }
}

//let obj2 = {...obj} //it spreads only single nested elements

//let obj2 = {...obj , address: {...obj.address, state: {...obj.address.state}} }  //shallow copy

let obj2 = JSON.parse(JSON.stringify(obj))    //deep copy

//obj.name = 'Mark'
obj.address.country = 'India'
obj.address.state.pincode = 111111

console.log(obj)
console.log(obj2)