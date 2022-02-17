let email = 'desibas481@diolang.com'
let password = 'Kuldeep@123'
const loginLink = "https://www.hackerrank.com/auth/login";

let puppeteer = require('puppeteer')
//Puppeteer works on promises

let page;

let browserWillBeLaunchedPromise = puppeteer.launch({ // launch method to return an instance of browser
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
})

browserWillBeLaunchedPromise.then(function (browserInstance) {
    let newTabPromise = browserInstance.newPage()
    return newTabPromise;

}).then(function (newTab) {
    console.log('New tab opened')
    page = newTab
    let pageWillBeOpenedPromise = newTab.goto(loginLink)
    return pageWillBeOpenedPromise;
    
}).then(function(){
    let typedEmailPromise = page.type("input[id = 'input-1']", email, {delay: 100})
    return typedEmailPromise

 }).then(function(){
     let typedPasswordPromise = page.type("input[id = 'input-2']", password, {delay: 100})
     return typedPasswordPromise

}).then(function(){
    let loginPromise = page.click("button[data-analytics='LoginPassword']", {delay: 100})
    return loginPromise

})