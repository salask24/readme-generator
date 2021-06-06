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
            message: 'What is the name of the project? (Required)',
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
            message: 'Provide a description of the project. (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTableOfContents',
            message: 'Would you like to add a Table of Contents?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide the installation instructions for the project. (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter install instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide content for the usage of the project. (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter usage content!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Enter any credits for the project. (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter credits for the project!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to add a License?',
            default: false
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select the license for this project.',
            choices: ['MIT License', 'Apache 2.0', 'GNU General Public License v3.0', 'None'],
            when: ({ confirmLicense }) => {
                if (confirmLicense) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmBadges',
            message: 'Would you like to add any Badges?',
            default: false
        },
        {
            type: 'input',
            name: 'badges',
            message: 'Enter any Badges you would like to add.',
            when: ({ confirmBadges }) => {
                if (confirmBadges) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmFeatures',
            message: 'Would you like list any features?',
            default: false
        },
        {
            type: 'input',
            name: 'features',
            message: 'List any features of the project.',
            when: ({ confirmFeatures }) => {
                if (confirmFeatures) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Would you like to provide contributing information?',
            default: false
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide any information for contributing to the project.',
            when: ({ confirmContributing }) => {
                if (confirmContributing) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to add any Tests?',
            default: false
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide any information on tests for the project',
            when: ({ confirmTests }) => {
                if (confirmTests) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your contact e-mail address? (Required)',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter your contact email!');
                    return false;
                }
            }
        }
    ])
};


//read me is being created
//write file needs 3 standard have to have processes: 
// 1. location and name of file
// 2. data written on to the file
// 3. err handling callback
// fs = file system and it can read, write, create folders, etc.

//.then promise file format 
// wait for the questions to be answered .THEN it will continue to next steps 
// only used for methods that have promise functionality 
    //inquirer - prebuilt package of sw that allows me to ask user questions in the command line (CLI) - npm (node package manager)
    //  chink of code I don't have to create
    //fetch - javascript third party apis and backend apis
    //ajax - jQuery third party apis and backend apis
questions()
    .then(answers => {
        const pageMarkdown = generateMarkdown(answers);

        // TODO: Create a function to write README file
        fs.writeFile('./dist/README.md', pageMarkdown, err => {
            if (err) throw err;

            console.log('README complete! Check out README.MD to see the output!');
        });

    });


// inquirer
//     .prompt(questions)
//     .then(answers => {
//         console.log(answers)

//         generateMarkDown(answers);
//     })
//     .catch(error => {
//         if (error.isTtyError) {

//         } else {

//         }
//     });




// var readmeString = `# ${data.title}\n` +
//     `## Description:\n` +
//     `${license}\n` +
//     `${data.description}\n` +
//     `## Table of Contents: \n` +
//     `* [Installation](##Installation)\n` +
//     `* [Usage](##Usage)\n` +
//     `* [License](##License)\n` +
//     `* [Contributing](##Contributing)\n` +
//     `* [Tests](##Tests)\n` +
//     `* [Questions](##Questions)\n` +
//     `## Installation:\n` +
//     `${data.installation}\n` +
//     `## Usage:\n` +
//     `${data.usage}\n` +
//     `## License:\n` +
//     `This project utilizes the ${data.license} license\n` +
//     `## Contributing:\n` +
//     `${data.contributing}\n` +
//     `## Tests:\n` +
//     `${data.tests}\n` +
//     `## Questions:\n` +
//     `My GitHub Profile: [https://github.com/${data.github}](https://github.com/${data.github})\n` +
//     `For further questions contact me at ${data.email}`;

// createReadMe(readmeString);

// const createReadMe = data => {
//     fs.writeFile('./generated/README.md', data, (err) => {
//         if (err) throw err;
//         console.log('The file has been saved!');
//     });
// }



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
