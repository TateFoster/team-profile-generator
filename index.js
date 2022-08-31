// requirements to constructor functions and modules
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

//variable to allow the generated objects to be stored
const employees = [];

// functions to check that there is correct style input for the user prompts
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

// Prompts for team manager info
inquirer
	.prompt([
		{
			type: "input",
			message: "What is the name of the Team Manager?",
			name: "name",
			validate: checkText,
		},
		{
			type: "input",
			message: "What is the Team Managers employee ID?",
			name: "id",
			validate: checkText,
		},
		{
			type: "input",
			message: "What is the Team Manager's email?",
			name: "email",
			validate: checkEmail,
		},
		{
			type: "input",
			message: "What is the Team Manager's officer Number?",
			name: "officeNumber",
			validate: checkText,
		},
	])
	.then((response) => {
		const manager = new Manager(
			response.name,
			response.id,
			response.email,
			response.officeNumber
		);
		employees.push(manager);
		console.log(employees);
	})
	.then(createEmployees());

function createEmployees() {
	inquirer
		.prompt([
			{
				type: "list",
				message: "What type of employee would you like to add?",
				choices: [
					"Engineer",
					"Intern",
					"I don't want to add any more employees",
				],
				name: "employeeType",
			},
		])
		.then((response) => {
			switch (true) {
				case response.choices === "Engineer":
					createEngineer();
					break;
				case response.choices === "Intern":
					createIntern();
					break;
				default:
					createPage();
					break;
			}
		});
}

function createEngineer() {
	inquirer
		.prompt([
			{
				type: "input",
				message: "What is the name of the engineer?",
				name: "name",
				validate: checkText,
			},
			{
				type: "input",
				message: "What is the engineer's employee ID?",
				name: "id",
				validate: checkText,
			},
			{
				type: "input",
				message: "What is the engineer's email?",
				name: "email",
				validate: checkEmail,
			},
			{
				type: "input",
				message: "What is the engineer's Github username?",
				name: "github",
				validate: checkText,
			},
		])
		.then((response) => {
			const engineer = new Engineer(
				response.name,
				response.id,
				response.email,
				response.github
			);
			employees.push(engineer);
			console.log(employees);
		})
		.then(createEmployees());
}
