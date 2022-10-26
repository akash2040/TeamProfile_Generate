const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Enginner = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");

const questionsManager = () => {
  inquirer.createPrompt([
    { type: "input", name: "name", message: "What is Team Manager name?" },
    { type: "input", name: "id", message: "What is Team Manager ID?" },
    { type: "input", name: "email", message: "What is Team Manager Email?" },
    {
      type: "input",
      name: "Officenumber",
      message: "What is Team Manager Officenumber?",
    },
    { type: "list", name: "addMember", choices: ["Engineer", "Intern"] },
  ]);
};
