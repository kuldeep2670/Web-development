var inquirer = require("inquirer")
inquirer
    .prompt([
        {
            type: "list",
            name: "selection",
            choices: ["choice 1", "choice 2"],
        },
    ])
    .then(function (ans) {
        if (ans.selection == "choice 1") {
            console.log("choice 1 selected")
        } else {
            console.log("choice 2 selected")
        }
    })
