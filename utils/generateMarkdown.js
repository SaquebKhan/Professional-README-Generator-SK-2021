// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return '![Github License] (https)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Testing](#testing)
* [Questions](#questions)


## Installation

To install application:

${data.installation}

## Usage

${data.usage}

## Contribution

${data.contribution}

## Testing

${data.testing}

## Questions 

You can contact me on Github at https://github.com/${data.github} or by email by ${data.email}`;
}

module.exports = generateMarkdown;
