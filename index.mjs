import inquirer from 'inquirer';
import fs from "fs/promises"


const { title, myRepoLink} = await inquirer
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
        
        }
    ])
    
    const titleInput = `[title link](${myTitleLink})`

    await fs.writeFile('README-Output.md', titleInput);



    
    