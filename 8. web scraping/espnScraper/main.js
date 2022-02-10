const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595'

const request = require('request')
const cheerio = require('cheerio')

request(url, cb)

function cb(error, response, html) {
    if (error) {
        console.error(error)
    } else {
        extractLink(html)
    }
}

function extractLink(html) {
    let $ = cheerio.load(html)
    let anchorElement = $('a[data-hover="View All Results"]')

    let link = anchorElement.attr('href')
    // console.log(link)

    let fullLink = 'https://www.espncricinfo.com/' + link;
    //console.log(fullLink) 

    getAllMatcheslink(fullLink)
}

function getAllMatcheslink(uri) {
    request(uri, function (error, response, html) {
        if (error) {
            console.error(error)
        } else {
            extractAllLink(html)
        }
    })
}

function extractAllLink(html){
    let $ = cheerio.load(html)
    
    let scoreCardArr = $('a[data-hover="Scorecard"]')
    
    for(let  i = 0; i < scoreCardArr.length; i++){
        let link = $(scoreCardArr[i]).attr('href')
        let fullLink = 'https://www.espncricinfo.com/' + link
        console.log(fullLink)
    }
}

//page --> view results-> links  
//-----> html-> scorecard-> links
//--->scorecard link-> page -> html -> score tables
