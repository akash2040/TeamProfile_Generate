// import inquirer
const inquirer = require("inquirer");
const fs = require("fs");
// import class from lib

const Manager = require("./lib/Manager");
const Enginner = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
// questrion for manager
portfolio = [];
const questionsManager = () => {
  inquirer
    .prompt([
      { type: "input", name: "name", message: "What is Team Manager name?" },
      { type: "input", name: "id", message: "What is Team Manager ID?" },
      { type: "input", name: "email", message: "What is Team Manager Email?" },
      {
        type: "input",
        name: "officenumber",
        message: "What is Team Manager Officenumber?",
      },
      { type: "list", name: "addMember", choices: ["Engineer", "Intern"] },
    ])
    .then((answersManagers) => {
      const manager = new Manager(
        answersManagers.id,
        answersManagers.name,
        answersManagers.email,
        answersManagers.officenumber
      );
      portfolio.push(manager);
      switch (answersManagers.addMember) {
        case "Engineer":
          questionsEngineer();
          break;
        case "Intern":
          questionsIntern();
          break;
        default:
          writeToFile("dist/index.html", OutputTeam(portfolio));
      }
    });
};
const questionsEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
      },
      {
        type: "list",
        name: "addMember",
        message: "What type of team member would you like to add next?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((answersEngineer) => {
      const engineer = new Engineer(
        answersEngineer.id,
        answersEngineer.name,
        answersEngineer.email,
        answersEngineer.github
      );
      portfolio.push(engineer);
      switch (answersEngineer.addMember) {
        case "Engineer":
          questionsEngineer();
          break;
        case "Intern":
          questionsIntern();
          break;
        default:
          writeToFile("dist/index.html", OutputTeam(portfolio));
      }
    });
};
const questionsIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
      },
      {
        type: "list",
        name: "addMember",
        message: "What type of team member would you like to add next?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((answersIntern) => {
      const intern = new Intern(
        answersIntern.id,
        answersIntern.name,
        answersIntern.email,
        answersIntern.school
      );
      portfolio.push(intern);
      switch (answersIntern.addMember) {
        case "Engineer":
          questionsEngineer();
          break;
        case "Intern":
          questionsIntern();
          break;
        default:
          writeToFile("dist/index.html", OutputTeam(portfolio));
      }
    });
};

questionsManager();

function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if (err) throw err;
    console.log("file saved");
  });
}
