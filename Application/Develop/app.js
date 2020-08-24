const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer"); 
const path = require("path"); 
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { getMaxListeners } = require("process");
// const Joshua = new Manager("josh", 2, "jshsandberg@getMaxListeners.com", 22);
// const Michael = new Engineer("Michael", 3, "hello@gmail.com", "Github.com");
// const employees = [Joshua, Michael];
// render(employees)

const employees = [];


function main(){
    inquirer.prompt({
    type: "list",
    name: "role",
    message: "What position are you creating?",
    choices: [`Intern`, `Engineer`, `Manager`, `Render`]
})
.then(answers => {
    switch (answers.role) {
        case answers.role = "Intern":
          inquirer.prompt([
                {
                type: "input",
                name: "name",
                message: "What is the name of this Intern?",
            },
                {
                type: "input",
                name: "id",
                message: "What is the ID for this Intern?"
            },
                {
                type: "input",
                name: "email",
                message: "What is the email for this Intern?" 
            },
                {
                type: "input",
                name: "school",
                message: "What school is this Intern currently in?"
            },
        ])
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            //const internJSON = JSON.stringify(intern);
            employees.push(intern);
            setTimeout(main, 500)

            // fs.appendFile(`record.json`, internJSON, function(err) {
            //     if (err) {
            //         throw err;
            //     }
            // })
            console.log(intern);
            // fs.writeFile("main.html", render(employees), function(err) {
            //     if (err) {
            //         throw err;
            //     }
            // });
        });  
            break;
        case answers.role = "Engineer":
            inquirer.prompt([
                {
                type: "input",
                name: "name",
                message: "What is the name of this Engineer?",
            },
                {
                type: "input",
                name: "id",
                message: "What is the ID for this Engineer?"
            },
                {
                type: "input",
                name: "email",
                message: "What is the email for this Engineer?" 
            },
                {
                type: "input",
                name: "github",
                message: "What is the GitHub account for this Engineer?"
            },
        ])
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            //const engineerJSON = JSON.stringify(engineer);
            employees.push(engineer);
            setTimeout(main, 500)
            // fs.appendFile(`record.json`, engineerJSON, function(err) {
            //     if (err) {
            //         throw err;
            //     }
            // })
            console.log(engineer);
            // fs.writeFile("main.html", render(employees), function(err) {
            //     if (err) {
            //         throw err;
            //     }
            // });
        });    
            break;
        case answers.role = "Manager":
            inquirer.prompt([
                {
                type: "input",
                name: "name",
                message: "What is the name of this Manager?",
            },
                {
                type: "input",
                name: "id",
                message: "What is the ID for this Manager?"
            },
                {
                type: "input",
                name: "email",
                message: "What is the email for this Manager?" 
            },
                {
                type: "input",
                name: "officeNumber",
                message: "What is the Manager's office number?"
            },
        ])
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            //const managerJSON = JSON.stringify(manager);
            employees.push(manager);
            setTimeout(main, 500)

            // fs.appendFile(`record.json`, managerJSON, function(err) {
            //     if (err) {
            //         throw err;
            //     }
            // })
            console.log(manager);
            // fs.appendFile("main.html", render(employees), function(err) {
            //     if (err) {
            //         throw err;
            //     }
            // });
        });   
            break;
        case answers.role = "Render":
            fs.writeFile("main.html", render(employees), function(err) {
                if (err) {
                    throw err;
                }
            });
            break;
        default:
            console.log(`broken`); 
    }
});
}




main()