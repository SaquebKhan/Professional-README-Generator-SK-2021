// TODO: Include packages needed for this application
const fd = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address'
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'description',
        message: "What is the description of your project?"
    },
    {
        type: 'input',
        name: 'intallation',
        message: "What intallation does the user need to know for the project?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "What usage does the user need to know for the project?"
    },
    {
        type: 'input',
        name: 'contribution',
        message: "What contribution guidlines dose the project have?"
    },
    {
        type: 'input',
        name: 'testing',
        message: "What are the testing instructions?"
    },
    {
        type: 'list',
        name: 'lic',
        message: "What lic are you using?",
        choices: ['MIT', 'APACHE', "BSD", 'Mozilla']
    }
];


// Function call to initialize app
init();

// TODO: Create a function to write README file using the user input from our choices above
function writeToFile(fileName, data) {
    return fd.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log('Your readMe is being created........');
            writeToFile('User_README.md', generateMarkdown({...response}))
        }
        )
}

