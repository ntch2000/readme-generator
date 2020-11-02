// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ---
  ${data.licenseBadge}
  
  ## Description
  

  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}  

  ## License
  
  ${data.licenseText}
  
  ## Contributing
  
${data.contributions}

  ## Tests
  
${data.tests}

  ## Questions
  
  If you have any questions regarding this project, please feel free to check out my GitHub [${data.githubUser}](https://github.com/${data.githubUser}).
  
  You can also reach me directly via my email address ${data.email}.
`;
}

module.exports = generateMarkdown;
