// function to generate markdown for README
function generateReadMe(answers) {
  return `
  
  ${answers.title}

  ## Table of Contents
  ${answers.tableOfContents}
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Tests](#Tests)
  - [Questions](#Questions)
  - [GitHub Username](#gitHubUsername)

  ## Description
  ${answers.description}

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