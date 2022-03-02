let email = 'desibas481@diolang.com'
let password = 'Kuldeep@123'
const loginLink = "https://www.hackerrank.com/auth/login";

let puppeteer = require('puppeteer')
const codeFile = require('./code')
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

}).then(function () {
    let typedEmailPromise = page.type("input[id = 'input-1']", email, { delay: 100 })
    return typedEmailPromise

}).then(function () {
    let typedPasswordPromise = page.type("input[id = 'input-2']", password, { delay: 100 })
    return typedPasswordPromise

}).then(function () {
    let loginPromise = page.click("button[data-analytics='LoginPassword']", { delay: 100 })
    return loginPromise

}).then(function(){
    let algoWillBeClickedPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]', page)
    return algoWillBeClickedPromise;

}).then(function(){
    console.log('Algo Section Clicked')

}).then(function(){
    let getToWarmupPromise = waitAndClick('input[value="warmup"]', page)
    return getToWarmupPromise

}).then(function(){
    let ChallengesArrPromise = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled', {delay: 100})
    return ChallengesArrPromise
}).then(function(questionsArr){
    console.log("No. of Questions : " + questionsArr.length)

    let questionWillBeSolvedPromise = questionSolver(page, questionsArr[0], codeFile.answers[0])
    return questionWillBeSolvedPromise
})


function waitAndClick(selector, cPage){
    return new Promise(function(resolve, reject){
        let waitForModalPromise = cPage.waitForSelector(selector);
        waitForModalPromise.then(function(){
            let clickModalPromise = cPage.click(selector, {delay:100})
            return clickModalPromise
        }).then(function(){
            resolve()
        }).catch(function(){
            reject()
        })
    })
}


function questionSolver(page, question, answer){
    return new Promise(function(resolve, reject){
        let questionWillBeClickedPromise = question.click()
        questionWillBeClickedPromise.then(function(){
            let waitForEditorPromise = waitAndClick('.monaco-editor.no-user-select.vs', page)
            return waitForEditorPromise
        }).then(function(){
            return waitAndClick('.checkbox-input', page)
        }).then(function(){
            return page.waitForSelector('.text-area.custominput')
        }).then(function(){
            return page.type('.text-area.custominput', answer, {delay: 5})
        }).then(function(){
            let ctrlIsPressedPromise = page.keyboard.down('Control')
            return ctrlIsPressedPromise
        }).then(function(){
            let AisPressedPromise = page.keyboard.press('A', {delay: 10})
            return AisPressedPromise
        }).then(function(){
            let XisPressedPromise = page.keyboard.press('X', {delay: 10})
            return XisPressedPromise
        }).then(function(){
            let ctrlIsReleasedPromise = page.keyboard.up('Control')
            return ctrlIsReleasedPromise
        }).then(function(){
            let waitForEditorPromise = waitAndClick('.monaco-editor.no-user-select.vs', page)
            return waitForEditorPromise
        }).then(function(){
            let ctrlIsPressedPromise = page.keyboard.down('Control')
            return ctrlIsPressedPromise
        }).then(function(){
            let AisPressedPromise = page.keyboard.press('A', {delay: 10})
            return AisPressedPromise
        }).then(function(){
            let VisPressedPromise = page.keyboard.press('V', {delay: 10})
            return VisPressedPromise
        }).then(function(){
            let ctrlIsReleasedPromise = page.keyboard.up('Control')
            return ctrlIsReleasedPromise
        }).then(function(){
            return page.click('.hr-monaco__run-code', {delay: 100})
        }).then(function(){
            resolve()
        }).catch(function(){
            reject()
        })
    })
}