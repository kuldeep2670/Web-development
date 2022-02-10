const fs = require('fs')

const xlsx = require('xlsx')
// let buffer = fs.readFileSync('./example.json')

// let data = JSON.parse(buffer) // this method is used to convert buffer or any type of data to json
// // console.log(data)

let jsonFile = require('./example.json')

jsonFile.push({
    "name": "thor",
    "last Name": "Odinson",
    "isAvenger": true,
    "friends": ["tony", "Peter", "Bruce"],
    "age": 102,
    "address": {
        "planet": 'asgard'
    }
}) //pushing a new object in json file

//console.log(data)

let stringData = JSON.stringify(jsonFile)
//converting json data into string so that we can write it in other files
//console.log(stringData)

fs.writeFileSync("example.json", stringData) // writing to json file

console.log('Json file updated')

function excelWriter(fileName, sheetName, jsonData) {
    let newWB = xlsx.utils.book_new(); // creating a new Workbook
    let newWS = xlsx.utils.json_to_sheet(jsonFile); // json is converted to sheet format(rows and columns)
    xlsx.utils.book_append_sheet(newWB, newWS, 'Avengers');
    xlsx.writeFile(newWB, 'abc.xlsx');
}

function excelReader(fileName, sheetName) {
    let wb = xlsx.readFile('abc.xlsx');
    let excelData = wb.Sheets['Avengers'];
    let ans = xlsx.utils.sheet_to_json(excelData);
    console.log(ans)
}
