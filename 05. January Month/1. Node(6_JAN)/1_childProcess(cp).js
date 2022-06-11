//child process is a node module to create sub process within a script
//you can perform different tasks with your script

const cp = require('child_process')

// console.log('Opening calculator')
// cp.execSync('calc')
// console.log('Calculator Opened')

// console.log('opening VS code')
// cp.execSync('code')

// cp.execSync('start chrome https://keybr.com')

let output = cp.execSync('node test.js')
console.log('Output : ' + output)    //without concatenation it outputs as binary data 
                                     //so we concatenate output with string



