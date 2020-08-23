//Declaring the dependencies and variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const axios = require("axios");
const generateReadMe = require("./utils/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);

//Array of questions for user
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
    name: "tableOfContents",
    message: "Select what you would like to include in your Table of Contents:",
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
    message: "Enter instructions with examples for usage:",
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
{
    type: "input",
    name: "gitHubUsername",
    message: "Please enter your GitHub username:"
}
]);
}

//Function to initialize program and then write the ReadMe File
const init= async () => {
    try{
        const answers = await readMeQuestions();
        const ReadMe = generateReadMe(answers);
        await writeFileAsync("ReadMe.md", ReadMe)
        console.log("You ReadMe has been generated.")
    } catch (error) {
        console.log (err)
    }
}
// function call to initialize program
init();