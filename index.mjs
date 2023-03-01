import inquirer from 'inquirer';
import fs from "fs/promises";


const { TitleLink, description, RepoLink, license, Technologies, Installation, Usage, Contributing, Questions, Content, Testing} = await inquirer
    .prompt([
        // shows the title of the READme
        {
            type: 'input',
            name: 'TitleLink',
            message: "What is the title of your READme file?",

        },
        // Shows the Repo Link
        {
            type: 'input',
            name: 'RepoLink',
            message: "What is your repo link?",

        },
        // shows description of the READme
        {
            type: 'input',
            name: 'description',
            message: "Please provide a description of your project?",

        },
        
        // shows the Technologies used in the project
        {
            type: 'input',
            name: 'Technologies',
            message: "Please state the Technologies used in your project?",

        },

        {
            type: 'input',
            name: 'Installation',
            message: "What are your installation?",

        },

        {
            type: 'input',
            name: 'Usage',
            message: "Please provide some usage information?",

        },

        {
        type: 'input',
        name: 'Testing',
        message: "What type of testing did you carry out?",

        },



        // Shows Questions the user may have
        
        {
            type: 'input',
            name: 'Contributing',
            message: "Please provide your contributing details?",
            
        },
        
        {
            type: 'input',
            name: 'Questions',
            message: "Do you have any Questions about the project?",

        },
        //  Users to choose from 3 licences types

        {
            type: 'list',
            name: 'license',
            message: 'What licence would do you need?',
            choices: ['Apache 2.0 License', 'MIT License', 'GPL License'],

        }


    ])


let licenseURL;
let licenseImg;



if (license === 'Apache 2.0 License') {
    licenseURL = 'http://www.apache.org/licenses/'
    licenseImg = 'https://img.shields.io/badge/License-$%7Blicense%7D-blue.svg'
}
if (license === 'MIT License') {
    licenseURL = 'https://mit-license.org/'
    licenseImg = 'https://img.shields.io/badge/License-$%7Blicense%7D-blue.svg'
}

if (license === 'GPL License') {
    licenseURL = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
    licenseImg = 'https://img.shields.io/badge/License-${license}-blue.svg'

}


let readMeString = ` # Project Title 
[Title]${TitleLink}
    
# Description of your project
[description]${description}
    

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [license](#license)
* [Contributing](#Contributing)
* [Testing](#Testing)
* [Questions](#Questions)


# Technologies Used
[Technologies] ${Technologies}

# Deployment information     
[RepoLink]${RepoLink}


# Installation
[Installation]${Installation}


# Usage
[Usage]${Usage}

# Contributing
[Contributing]${Contributing}

# Testing
[Testing]${Testing}

    
               
# Licenses
Licenced by: ${license}
* ${licenseURL}
* ${licenseImg}
        
 
# Any Questions?
[Questions]${Questions}

`
await fs.writeFile('README-Output.md', readMeString);


