import inquirer from 'inquirer';
import fs from "fs/promises";


const { myTitleLink, description, myRepoLink, license } = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'myTitleLink',
            message: "What is the title of your READme file?",

        },
        {
            type: 'input',
            name: 'myRepoLink',
            message: "What is your repo link?",

        },
        {
            type: 'input',
            name: 'description',
            message: "Please provide a description of your project?",

        },

        //  licences - users to choose from 3 licences types

       
        {
            type: 'list',
            name: 'license',
            message: 'What licence would do you need?',
            choices: ['Apache 2.0 License', 'MIT License', 'GPL License'],

        }

    ])

console.log(license)

let licenseURL;
let licenseImg;



if (license === 'Apache 2.0 License') {
    licenseURL = 'http://www.apache.org/licenses/'
    licenseImg = 'https://img.shields.io/badge/License-$%7Blicense%7D-blue.svg'
}
if (license === 'MIT License') {
    licenseURL = ' https://mit-license.org/'
    licenseImg = 'https://img.shields.io/badge/License-$%7Blicense%7D-blue.svg'
}

if (license === 'GPL License') {
    licenseURL = ' https://www.gnu.org/licenses/gpl-3.0.en.html'
    licenseImg = 'https://img.shields.io/badge/License-$%7Blicense%7D-blue.svg'


    // filter(val) {
    // return val.toLowerCase();
}


let readMeString = `#[Title]${myTitleLink}

     #   [description]${description}
        
        
        Deployment information 
        
        [RepoLink]${myRepoLink}
        
        License Distributed under the MIT License. See LICENSE.txt for more information.
        
        Contact details- Abby Egbo https://github.com/AbbyIT
        
        Licenced by: ${license}
        ${licenseURL}
        ${licenseImg}
        
        `
await fs.writeFile('README-Output.md', readMeString);

    
