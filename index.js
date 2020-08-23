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
    name: "projectTitle",
    message: "What is the title of the project?",
},
{
    type: "input",
    name: "description",
    message: "Write a brief description of your project:",
},
{
    type: "input",
    name: "installation",
    message: "Describe the installation process:",
},



];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
