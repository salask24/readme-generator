// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'Required: What is the name of your project?',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter the project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Required: Please provide a description of your project.',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter a description of tour project!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTableOfContents',
            message: 'Optional: Would you like to include a table of contents?',
            default: true
        },

    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
