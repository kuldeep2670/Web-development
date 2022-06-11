const inquirer = require("inquirer")
const cp = require("child_process")

function displayList() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "selection",
                choices: ["About", "Skills", "Academics", "Projects"],
            },
        ])
        .then(function (ans) {
            if (ans.selection == "About") {
                console.log(`I am a web developer currently 
studying in 3rd year of Btech CSE.`)
                displayNext()

            } else if (ans.selection == "Skills") {
                console.log(" HTML, CSS, JAVASCRIPT, NODE.JS, JAVA, C/C++, MySQL")
                displayNext()

            } else if (ans.selection == "Academics") {
                cp.execSync('start chrome https://www.ipuranklist.com/student/11713202719')
                displayNext()

            } else if (ans.selection == "Projects") {
                cp.execSync('start chrome https://github.com/kuldeep2670')
                displayNext()
            }
        });
}
displayList();

//Go back option
function displayNext() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "selection",
                choices: ["Go back", "Exit"],
            },
        ])
        .then(function (ans) {
            if (ans.selection == "Go back") {
                displayList()
            } else if(ans.selection == "Exit"){
                console.log('Resume closed')
            }
        })

}


