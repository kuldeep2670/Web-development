const request = require('request')
const cheerio = require('cheerio')

console.log('Before')
request('https://www.worldometers.info/coronavirus/', cb)

function cb(error, response, html) {
    if (error) {
        console.error(error)
    } else {
        handleHTML(html)
    }
}

function handleHTML(html) {
    let selTool = cheerio.load(html) //selTool -> selector tool // we load all the html in selTool

    let contentArr = selTool('.maincounter-number span')

    // for (let i = 0; i < contentArr.length; i++) {
    //     let data = selTool(contentArr[i]).text()
    //     console.log(data)
    // }
    let totalCases = selTool(contentArr[0]).text()
    let totalDeaths = selTool(contentArr[1]).text()
    let totalRecovery = selTool(contentArr[2]).text()
    console.log('Total cases: '+ totalCases)
    console.log('Total deaths: '+ totalDeaths)
    console.log('Total recoveries: '+ totalRecovery)
}
console.log('After')