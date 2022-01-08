// // File system module

//******************************************** FILES *********************************************//

const fs = require('fs')  //file system module

const path = require('path') // path module

// //1. we will be reading writing updating and deleting files

// // let content = fs.readFileSync('f1.txt')  // reading a file
// // console.log('Content of  f1 file : ' + content)

// //writing a file
// //writeFileSync
// //if the file pass does not exist  then a new file will be created and data will be written on it

// fs.writeFileSync('f2.txt', 'this data will be written in f2.txt')
// fs.writeFileSync('f3.txt', 'this data will be written in f3.txt')

// console.log('data written')

// // Append a file
// //appendFileSync method adds new data to a previously written file
// fs.appendFileSync('f2.txt',' this is new data ')


// //delete a file
// //unlinkSync

// fs.unlinkSync('f2.txt')
// console.log('f2 deleted')


// // ***********************************directories***************************************//

// //create a directory
// //mkdirSync method is used to create a new directory or folder

// fs.mkdirSync('myDirectory')
// console.log('directory created')

// //delete a directory
// //rmdirSync

// fs.rmdirSync('myDirectory')
// console.log('directory removed')

// //to check whether a directory exist or not
// //existsSync

// let doesExist = fs.existsSync('f1.txt')
// //console.log(doesExist)

// //stats of directory
// let statsOfDirectory = fs.lstatSync('myDirectory')
// //console.log(statsOfDirectory)

// //isFile check whether a file or not
// console.log('isFile?', statsOfDirectory.isFile())

// //isDirectory
// console.log('isDirectory?', statsOfDirectory.isDirectory())

// //readdirSync
// //readdirSync is a method which is used to check content inside a directory
// let folderpath = 'E:\\Pepcoding\\web development\\5. January Month\\1. Node(6_JAN)\\myDirectory'
// let foldercontent = fs.readdirSync(folderpath)
// console.log('directory content : ' + foldercontent)


//Copying files

let srcFilePath = 'E:\\Pepcoding\\web development\\5. January Month\\1. Node(6_JAN)\\myDirectory\\f2.txt'
let destinationPath = 'E:\\Pepcoding\\web development\\5. January Month\\1. Node(6_JAN)\\myDirectory2'

let toBeCopiedFileName = path.basename(srcFilePath)
console.log(toBeCopiedFileName)

let destPath = path.join(destinationPath, toBeCopiedFileName)
console.log(destPath)

fs.copyFileSync(srcFilePath, destPath)
console.log('File copied')

