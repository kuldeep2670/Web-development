function add(a,b){
    console.log("The sum is ", a+b)
}

function sub(a,b){
    console.log("The difference is ", a-b)
}

function mul(a,b){
    console.log("The multiplication is ", a*b)
}

function div(a,b){
    console.log("The division is ", a/b)
}



module.exports={
    addition : add,
    subtraction : sub,
    multiplication : mul,
    division : div,
}

//module.exports is a object provided by node.js by
//which you can exports your functions