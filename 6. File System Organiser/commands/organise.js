const fs = require('fs')
const path = require('path')
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: ["docx", "doc", "pdf", "xlsx", "xls", "odt", "ods", "odp", "odg", "odf", "txt", "ps", "tex"],
    app: ["exe", "dmg", "pkg", "deb"],
    images: ["jpg", "png", "jpeg", "gif", "PNG"]
};
function organiser(dirpath) {

    let destPath
    if (dirpath == undefined) {
        console.log('Please enter a valid Directory Path') // check whether dirpath exist or not
        return;
    } else {
        let doesExist = fs.existsSync(dirpath)   // this will tell whether the dirpath exists or not
        // console.log(doesExist)

        if (doesExist == true) {
            destPath = path.join(dirpath, 'organised_files')
            // E:\Pepcoding\web development\test folder for fso\organised_files

            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath)  // we will only create a folder if it does not already exist
            } else {
                console.log('This folder already exist')
            }

        } else {
            console.log('Please enter a valid path')
        }
    }
    organiseHelper(dirpath, destPath)
}

// we are writing this function to categorise our files
function organiseHelper(src, dest) {
    let childNames = fs.readdirSync(src) // get all the files and folders inside your src folder
    //console.log(childNames)

    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i]) //path is identified for the fiels
        let isFile = fs.lstatSync(childAddress).isFile() // we check here to identify only the files
        //console.log(childAddress + " " + isFile)
        if (isFile == true) {
            let fileCategory = getCategory(childNames[i])
            console.log(childNames[i] + "  belongs to " + fileCategory)

            sendFiles(childAddress, dest, fileCategory)
        }
    }
}

function getCategory(name) {
    let ext = path.extname(name)
    ext = ext.slice(1)

    for (let type in types) {
        let cTypeArr = types[type]
        for (let i = 0; i < cTypeArr.length; i++) {
            if (ext == cTypeArr[i]) {   //we matched the extensions with the values present in cTypeArr
                return type
            }
        }

    }
    return 'others'
}

function sendFiles(srcFilePath, dest, fileCategory) {
    let catPath = path.join(dest, fileCategory)
    //E:\Pepcoding\web development\test folder for fso\organised_files\media

    if (fs.existsSync(catPath) == false) {  //checking for category folder path
        fs.mkdirSync(catPath)
    }

    let fileName = path.basename(srcFilePath)  //we took out the name of the files
    let destFilePath = path.join(catPath, fileName) // we created a path for the files in the category folders

    fs.copyFileSync(srcFilePath, destFilePath) //copied files from source to destination
    fs.unlinkSync(srcFilePath)  // delet the files from source
    console.log(fileName + " is copied to " + fileCategory)
}

module.exports ={
    organiseKey: organiser
}