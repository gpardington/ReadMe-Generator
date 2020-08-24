// function to generate markdown for README
function generateReadMe(answers) {
  return `
  
  ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  ${answers.tableOfContents}

  ### Installation
  ${answers.installation}

  ### Usage 
  ${answers.usage}

  ### License
  ${answers.license}

  ### Contributors
  ${answers.contributing}

  ### Tests
  ${answers.tests}

  ### Questions
  ${answers.questions}

  ### GitHub Username
  ${answers.gitHubUsername}

  ### Badges
  ![npm](https://img.shields.io/static/v1?label=license&message=${answers.license}&color=blue)

  Copyright 2020 &copy;
  `;
}

module.exports = generateReadMe;