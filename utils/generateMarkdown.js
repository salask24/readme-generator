// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = licenseName => {
  if (!licenseName) {
    return ``
  }
  else if (licenseName.includes('MIT')) {
    licenseName = 'MIT';
    return `![license](https://img.shields.io/badge/license-MIT-green)`
  }
  else if (licenseName.includes('Apache 2.0')) {
    licenseName = 'Apache 2.0';
    return `![license](https://img.shields.io/badge/license-Apache%202.0-green)`
  }
  else if (licenseName.includes('GNU General Public License v3.0')) {
    licenseName = 'GNU General Public License v3.0';
    return `![license](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-green)`
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const generateLicense = LicenseText => {
  if (!LicenseText) {
    return '';
  }
  return `# License
    
${LicenseText}
    `;
};

// create the badges section
const generateBadges = badgesText => {
  if (!badgesText) {
    return '';
  }
  return `# Badges
    
${badgesText}
    `;
};
// create the features section
const generateFeatures = featuresText => {
  if (!featuresText) {
    return '';
  }
  return `# Features
    
${featuresText}
    `;
};
// create the Contributing section
const generateContributing = contributingText => {
  if (!contributingText) {
    return '';
  }
  return `# Contributing
    
${contributingText}
    `;
};
// create the tests section
const generateTests = testsText => {
  if (!testsText) {
    return '';
  }
  return `# Tests
    
${testsText}
    `;
};

// create the table of contents section
const generateTableOfContents = tableOfContents => {
  if (tableOfContents === false) {
    return '';
  }
  return `# Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#questions)`;
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const tableOfContentsLicense = license => {
  if (!license) {
    return '';
  }
  return `* [License](#license)`
}
const tableOfContentsBadges = badges => {
  if (!badges) {
    return '';
  }
  return `* [Badges](#badges)`
}
const tableOfContentsFeatures = features => {
  if (!features) {
    return '';
  }
  return `* [Features](#features)`
}
const tableOfContentsContributing = contributing => {
  if (!contributing) {
    return '';
  }
  return `* [Contributing](#contributing)`
}
const tableOfContentsTests = tests => {
  if (!tests) {
    return '';
  }
  return `* [Tests](#tests)`
}

module.exports = generateMarkdown => {
  const { projectName, description, installation, usage, credits, github, email, ...notRequired } = generateMarkdown;
  //console.log(generateMarkdown);

  return `# ${projectName}
    ${renderLicenseBadge(notRequired.license)}
${description}
${generateTableOfContents(notRequired.confirmTableOfContents)}
${tableOfContentsLicense(notRequired.license)}
${tableOfContentsBadges(notRequired.badges)}
${tableOfContentsFeatures(notRequired.features)}
${tableOfContentsContributing(notRequired.contributing)}
${tableOfContentsTests(notRequired.tests)}
# Installation
${installation}
# Usage 
${usage}
# Credits
${credits}
# Questions
[Contact Me](${email})
[GitHub](https://github.com/${github})
${generateLicense(notRequired.license)}
${generateBadges(notRequired.badges)}
${generateFeatures(notRequired.features)}
${generateContributing(notRequired.contributing)}
${generateTests(notRequired.tests)}
`;
}