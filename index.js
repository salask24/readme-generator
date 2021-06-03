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
        {
            type: "checkbox",
            name: "license",
            message: "Please choose a license",
            choices: ['MIT', 'Apache License 2.0', 'ISC', 'GNU GPLv2']
        },
        {
            type: "input",
            name: "tests",
            message: "Please enter information on testing",
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your GitHub username"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address"
        }
    ])
}

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
