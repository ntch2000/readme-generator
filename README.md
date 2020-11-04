# Readme Generator

---

## Description

This application allows users to create a quality README file via the command-line. Users are prompted with questions that correspond to each section of a basic README file and a README.md file is generated with the inputs to the prompts.

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Application Screenshot](#application-screenshot)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Credits](#credits)

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Installation

In order to install this project, you must first have node.js installed. Once this is installed, the project files can be obtained by forking the repository at my [GitHub Repo](https://github.com/ntch2000/readme-generator).

Once the repository is cloned, the following command must be run in order to obtain the Inquirer dependency modules from npm.

```node.js
npm install
```

## Application Screenshot

## Usage

Once the project files are clones and the dependency files installed from npm, users can run the application from their working directory in the terminal by running the following command.

```node.js
node index.js
```

This will start the application with prompts the user must answer. The responses to these questions will fill the content of each heading and a README file will be generated at the conclusion of the prompts.

## Questions

If you have any questions regarding this project, please feel free to check out my GitHub [ntch2000](https://github.com/ntch2000).

You can also reach me directly via my email address neil.sgandhi@gmail.com

## Credits

Utilized license badges from [lukas-h/license-badges.md](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba). These badges allow for users to click the badge to open a page to the detailed license information that is also located in the 'License' section of the generated README

Utilized NPM Inquirer which can be found at [Inquirer](https://www.npmjs.com/package/inquirer). Inquirer allows for prompts to be displayed to the command line and responses to be output as an object in JavaScript.

---

© 2020 Neil Gandhi
