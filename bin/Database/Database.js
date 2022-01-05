
const Inquirer = require("inquirer");
const Shell = require("shelljs");

const PATH = process.cwd();


module.exports.MongoDB = () => {
    Shell.exec(`npm install express mongoose`);
    console.log('NodeJs with MongoDB perfectly initialized successfully!')
}

