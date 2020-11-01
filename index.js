const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { title } = require("process");

/* readme sections
Project Title
Description
Table of Contents
Installation
Usage
License
Contributing
Tests
Questions
*/

//MIT, APACHE, GPL,  NONE

// array of questions for user
const questions = [
  "What is your GitHub username?",
  "What is your email address?",
  "What is the title of your project?",
  "What is the description of your project?",
  "What are the instructions for installing this project?",
  "What is the usage information for this project?",
  "What licenses were used to create this project?",
  "What are the contribution guidelines for this project",
  "What test instructions should be included?",
];

// object of license options and badges

/* APACHE 
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

GPL v3
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)



MIT
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)





*/

const licenses = [
  {
    name: "APACHE",
    value:
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  },
  {
    name: "GPL v3",
    value:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  },
  {
    name: "MIT",
    value:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    if (err) throw err;
    console.log("Created file successfully!");
  });
}

// function to initialize program
function init() {
  inquirer
    .prompt([
      {
        name: "githubUser",
        message: questions[0],
        type: "input",
      },
      { name: "email", message: questions[1], type: "input" },
      {
        name: "title",
        message: questions[2],
        type: "input",
      },
      {
        name: "description",
        message: questions[3],
        type: "input",
      },
      {
        name: "installation",
        message: questions[4],
        type: "input",
      },
      {
        name: "usage",
        message: questions[5],
        type: "input",
      },
      {
        name: "license",
        message: questions[6],
        type: "list",
        choices: licenses,
      },
      {
        name: "contributions",
        message: questions[7],
        type: "input",
      },
      {
        name: "tests",
        message: questions[8],
        type: "input",
      },
    ])
    .then((response) => {
      console.log(response);
      // console.log(response.license);
      writeToFile("test.md", response);
    });
}

// function call to initialize program
init();

console.log({ title });
