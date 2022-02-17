let puppeteer = require('puppeteer')

console.log('Before')

let browserWillBeLaunchedPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--start-maximized']
})

browserWillBeLaunchedPromise.then(function (browserInstance) {
    let newTabPromise = browserInstance.newPage()
    return newTabPromise;

}).then(function (newTab) {
    console.log('New tab opened')
    let pageWillBeOpenedPromise = newTab.goto('https://pepcoding.com/')
    return pageWillBeOpenedPromise;
    
}).then(function(){
    console.log('Website opened')
})

console.log('After')