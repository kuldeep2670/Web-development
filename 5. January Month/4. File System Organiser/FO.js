// File system organiser
// Features of the project
// If you have numerous files in a folder and they are not properly arranged
// then this will help you in orgainsing files in a folder

// in JS we take input in form of array and thats array is process.argv array

const help = require("./commands/help")
const organise = require("./commands/organise")
const tree = require("./commands/tree")

let inputArr = process.argv.slice(2);  //slice discard the 0 and 1 index  
let command = inputArr[0] // tree, organise, help

switch (command) {
    case 'tree':
        tree.treekey(inputArr[1])
        break;
    case 'organise':
        organise.organiseKey(inputArr[1])
        break;
    case 'help':
        help.helpKey()
        break;
    default:
        console.log('Please enter a valid command')
        break;
}