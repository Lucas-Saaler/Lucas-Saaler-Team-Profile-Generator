// Libraries
const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const generateHTML = require("./src/generateHTML")
const managerCard = require("./src/managerHTML")
const engineerCard = require("./src/engineerHTML")
const internCard = require("./src/internHTML")

// Inquirer questions
const employeeArray = []
const managerQuestions = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the manager's ID?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the manager's email address?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "managerOfficeNumber"
    },
]

const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is the engineer's ID?",
        name: "engineerId"
    },
    {
        type: "input",
        message: "What is the engineer's email address?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "engineerGitHub"
    },
    {
        type: "input",
        message: "What is the engineer's GitHub link?",
        name: "engineerLink"
    }
]

const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is the intern's ID?",
        name: "internId"
    },
    {
        type: "input",
        message: "What is the intern's email address?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "Where does the intern go to school?",
        name: "internSchool"
    },
]

// Called when node index is run. Questions about manager
function init() {
    inquirer
        .prompt(managerQuestions)
        .then(response => {
            const manager = new Manager(response.managerName,
                response.managerId,
                response.managerEmail,
                response.managerOfficeNumber
            )
            // Adds to employee array
            employeeArray.push(manager)
            // Move on to next generation
            confirmNext()
        })
}

// Checks if the user wants to add more employees
function confirmNext() {
    inquirer.prompt([{
        type: "confirm",
        message: "Do you want to add more employee?",
        name: "addMore"
    }])
        .then(response => {
            if (response.addMore === true) {
                addEmployee()
            }
            else {
                // Will finish the program and generate the HTML
                createHTML()
            }
        })
}

// Choose an employee type or cancel
function addEmployee() {
    inquirer.prompt([{
        type: "list",
        message: "Do you add Engineer or Intern?",
        choices: ["Engineer", "Intern", "Cancel"],
        name: "selection"
    }])
        .then(response => {
            if (response.selection === "Engineer") {
                addEngineer()
            }
            else if (response.selection === "Intern") {
                addIntern()
            }else{
                // If cancel is selected, HTML is generated, and program finishes
                createHTML()
            }
        })
}

// Asks questions about engineer
function addEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then(response => {
            const engineer = new Engineer(response.engineerName,
                response.engineerId,
                response.engineerEmail,
                response.engineerGitHub,
                response.engineerLink
            )

            // Pushes to employee array
            employeeArray.push(engineer)

            // Continue to next generation
            confirmNext()
        })
}

// Asks questions about the intern
function addIntern() {
    inquirer
        .prompt(internQuestions)
        .then(response => {
            const intern = new Intern(response.internName,
                response.internId,
                response.internEmail,
                response.internSchool
            )

            // Pushes to employee array
            employeeArray.push(intern)

            // Continue to next generation
            confirmNext()
        })
}

// Creates HTML file
function createHTML() {
    // Will be populated by array
    let cards = ""

    // Check roles, add card based on role
    for (let i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i].getRole() === "Manager") {
            cards = cards + managerCard(employeeArray[i])
        }
        else if (employeeArray[i].getRole() === "Engineer") {
            cards = cards + engineerCard(employeeArray[i])
        } else {
            cards = cards + internCard(employeeArray[i])
        }
    }
    // Creates the HTML
    fs.writeFileSync("./output/team.html", generateHTML(cards))

}

// Called with node index
init()