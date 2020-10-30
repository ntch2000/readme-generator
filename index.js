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

const licenses = [];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
