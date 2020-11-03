const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const year = new Date().getFullYear();
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
// array holds the information for the licenses the user can select from
const licenses = [
  {
    name: "APACHE",
    value:
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    text: `Copyright ${year} OWNER

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`,
  },
  {
    name: "GNU GPL v3",
    value:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    text: `Copyright (C) ${year}  OWNER

      This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.
  
      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.
  
      You should have received a copy of the GNU General Public License
      along with this program.  If not, see <https://www.gnu.org/licenses/>.`,
  },
  {
    name: "MIT",
    value:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    text: `Copyright ${year} OWNER

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`,
  },
];

// function to write README file
function writeToFile(fileName, data) {
  // sets the copyright owner information for the license section of the readme after the markdown string is generated
  const newData = generateMarkdown(data).replace("OWNER", data.githubUser);

  // writes the file
  fs.writeFile(fileName, newData, (err) => {
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
        choices: ["APACHE", "GNU GPL v3", "MIT"],
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
      // checks to see which license the user selected from the licenses[] array
      const licenseInfo = licenses.filter((license) => {
        if (license.name === response.license) {
          return license;
        }
      });
      // deconstructs the array to obtain the license badge and license text
      const { value, text } = licenseInfo[0];

      //console.log(`${value} has this text: ${text}`);
      // sets two new properties to the response object from prompt() to include the license badge and license text
      response["licenseBadge"] = value;
      response["licenseText"] = text;
      //console.log(response);
      // calls the function to write the readme.md file
      writeToFile("README-Generated.md", response);
    });
}

// function call to initialize program
init();
