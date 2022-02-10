// result, venue, date, team name, opponent, result

const url = 'https://www.espncricinfo.com//series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard'

const request = require('request')
const cheerio = require('cheerio')

request(url, function (error, response, html) {
    if (error) {
        console.error(error)
    } else {
        extractMatchDetails(html)
    }
})

function extractMatchDetails(html) {
    let $ = cheerio.load(html)
    let descString = $('.header-info .description')

    let descStringArr = descString.text().split(',')

    let venue = descStringArr[1].trim()  // trim -> remove whitespaces 
    let date = descStringArr[2].trim()

    let result = $('.match-info.match-info-MATCH.match-info-MATCH-half-width .status-text ').text()
    console.log(venue)
    console.log(date)
    console.log(result)
}
