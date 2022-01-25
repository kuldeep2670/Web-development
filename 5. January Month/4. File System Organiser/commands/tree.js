const fs = require('fs')
const path = require('path')
function treeFn(dirpath) {
    if (dirpath == undefined) {
        console.log("Please enter a valid Directory Path")
        return;
    } else {
        let doesExist = fs.existsSync(dirpath)
        if (doesExist == true) {
            treeHelper(dirpath, " ")

        }
    }
}


function treeHelper(targetPath, indent) {
    let isFile = fs.lstatSync(targetPath).isFile()

    if (isFile == true) {
        let fileName = path.basename(targetPath)
        console.log(indent + "├──" + fileName)// this will display all the files
    } else {
        let dirName = path.basename(targetPath)
        console.log(indent + "└──" + dirName)// this will display all the folders

        let children = fs.readdirSync(targetPath)
        //here we tool out all the children of test folder
        // console.log(children)

        for (let i = 0; i < children.length; i++) {
            let childPath = path.join(targetPath, children[i])
            treeHelper(childPath, indent + "\t")
            //using recursion to repeat the process for all files and folders
        }

    }
}

module.exports={
    treekey: treeFn
}