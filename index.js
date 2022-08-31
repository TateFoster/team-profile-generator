const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

const checkText = (input) => {
	if (typeof input !== "string" || !input.trim().length) {
		return console.log("\n\x1B[31mThat is not a valid entry");
	} else {
		return true;
	}
};

const checkEmail = (input) => {
	if (input.match(/.*@[a-zA-Z]*.com/)) {
		return true;
	} else {
		return console.log("\n\x1B[31mThat is not a valid email");
	}
};

inquirer.prompt([
	{
		type: "input",
		message: "What is the name of the Team Manager?",
		name: "name",
		validate: checkText,
	},
	{
		type: "input",
		message: "What is the Team Manager's email?",
		name: "email",
		validate: checkEmail,
	},
]);
