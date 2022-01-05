#! /usr/bin/env node

const Inquirer = require("inquirer");
const Shell = require("shelljs");

const PATH = process.cwd();

const { DevelopQuestions, NodeJS_Ques } = require("./utils/Questions");
const {MongoDB} = require('./Database/Database');

const AnswerOfNode = (node) => {
  //   Shell.exec("mkdir radom small");
  if (node.Database === "MongoDB") MongoDB();
};

const AnswerOfReact = (react) => {
  console.log(react);
};

const AnswerOfDevelop = (ansOfDevelop) => {
  if (ansOfDevelop.Develop === "NodeJS") {
    Shell.exec(`mkdir ${ansOfDevelop.projectName}`);
    console.log("📁 Created a folder for the project");
    Shell.cd(`${PATH}/${ansOfDevelop.projectName}`);
    Shell.exec(`npm init --y`);
    console.log("Project init successfully!");
    Inquirer.prompt(NodeJS_Ques).then(AnswerOfNode);
  }
};

Inquirer.prompt(DevelopQuestions).then(AnswerOfDevelop);
