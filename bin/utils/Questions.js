const DevelopQuestions = [
  {
    type: "list",
    name: "Develop",
    message: "What do you want to Develop? :",
    choices: ["React", "NodeJS"],
  },
  {
    type: "text",
    name: "projectName",
    message: "Enter your project name:",
  },
];

const NodeJS_Ques = [
  {
    type: "list",
    name: "Database",
    message: "What database are you using for this project? :",
    choices: ["Sql", "MongoDB"],
  },
];

module.exports = { DevelopQuestions, NodeJS_Ques };
