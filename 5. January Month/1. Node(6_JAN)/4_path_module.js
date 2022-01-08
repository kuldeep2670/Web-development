//*******************************Path module*****************************************//

const path = require('path')

// this extname method gives the extension name of the file
let ext = path.extname('E:\\Pepcoding\\web development\\5. January Month\\1. Node(6_JAN)\\f1.txt')
console.log(ext)

// basename extracts the file name from your path
let basename = path.basename('E:\\Pepcoding\\web development\\5. January Month\\1. Node(6_JAN)\\f1.txt')
console.log('Basename : '+ basename)


console.log(__dirname)  // gets you the path of the current directory of the file
console.log(__filename) // gets you the path of the file you are in


