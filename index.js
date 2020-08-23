//Declaring the dependencies and variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const axios = require("axios");
const generateReadMe = require("./utils/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const readMeQuestions = () => {
    return inquirer.prompt([
{
    type: "input",
    name: "title",
    message: "What is the title of the project?",
},
{
    type: "input",
    name: "description",
    message: "Write a brief description of your project:",
},
{
    type: "checkbox",
    message: "Select what you would like to include in your Table of Contents:",
    name: "tableOfContents",
    choices: [
        "Project Title",
        "Description",
        "Installation",
        "Usage",
        "License",
        "Contributing",
        "Tests",
        "Questions"
    ]
},
{
    type: "input",
    name: "installation",
    message: "Describe the installation process:",
},
{
    type: "input",
    name: "usage",
    message: "What is the project usage for?",
},
{
    type: "list",
    name: "license",
    message: "Choose the appropriate licenses for this project:",
    choices: [
        "Apache",
        "GNU",
        "ISC",
        "MIT",
        "Unlicensed",
    ]
},
{
    type: "input",
    name: "contributing",
    message: "Who contributed to this project?",
},
{
    type: "input",
    name: "tests",
    message: "Is there a test included?",
},
{
    type: "input",
    name: "questions",
    message: "What do I do if there is an issue?",
},
]);
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
