// All variables , arrays, objects, functions etc have boolean values in javascript
// if the value is true it is truthy
//if the value is false it is falsy

function testTruthyFalsy(val){
    return val ? console.log('truthy') : console.log('falsy');
}

testTruthyFalsy( )


// List of Truthy values in Js
// 1, true, " ", [], {}, function () {}, new Date(), new Error(), new RegExp()
// Any Number other than 0
// Any String other than empty string
// New Object


// List of Falsey values in Js
// 0, false, null, undefined, NaN, Infinity, -Infinity

const log = console.log;
function homeWork() {
  if ((-100 && 100 && "0") || [] === true || 0) {
    log(1);
    if ([] || (0 && false)) {
      log(2);
    }
    if (Infinity && NaN && "false") {
      log(3);
      if ("") {
        log(4);
      }
    } else {
      log(5);
      if (({} || false === "") && !(null && undefined)) {
        log(6);
      }
    }
  }
}

homeWork();



