// requirements to constructor functions and modules
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");

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
	})
	.then((employee) => createEmployees());

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
				case response.employeeType === "Engineer":
					createEngineer();
					break;
				case response.employeeType === "Intern":
					createIntern();
					break;
				default:
					fs.writeFile("./dist/index.html", createPage(), (err) =>
						err ? console.error(err) : console.log("Team webpage created")
					);
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
		})
		.then((response) => createEmployees());
}

function createIntern() {
	inquirer
		.prompt([
			{
				type: "input",
				message: "What is the name of the intern?",
				name: "name",
				validate: checkText,
			},
			{
				type: "input",
				message: "What is the intern's employee ID?",
				name: "id",
				validate: checkText,
			},
			{
				type: "input",
				message: "What is the intern's email?",
				name: "email",
				validate: checkEmail,
			},
			{
				type: "input",
				message: "What is the intern's school?",
				name: "school",
				validate: checkText,
			},
		])
		.then((response) => {
			const intern = new Intern(
				response.name,
				response.id,
				response.email,
				response.school
			);
			employees.push(intern);
		})
		.then((response) => createEmployees());
}

function renderCards(people) {
	const icon = [];
	const lastList = [];
	if (people.role === "Manager") {
		icon.push(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-hot-fill" viewBox="0 0 16 16">
		<path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5Z"/>
		<path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z"/>
	  </svg>`);
		lastList.push(
			`<li class="list-group-item">Office Number: ${people.officeNumber}</li>`
		);
	}
	if (people.role === "Engineer") {
		icon.push(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
		<path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"/>
	  </svg>`);
		lastList.push(
			`<li class="list-group-item">Github: <a href="https://github.com/${people.github}" class="card-link">${people.github}</a></li>`
		);
	}
	if (people.role === "Intern") {
		icon.push(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
		<path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
		<path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
	  </svg>`);
		lastList.push(`<li class="list-group-item">School: ${people.school}</li>`);
	}

	return `<div class="card m-3" style="width: 18rem;">
	<div class="card-body bg-primary text-white">
	  <h3 class="card-title">${people.name}</h3>
	  <h4 class="card-title">${icon[0]} ${people.role}</h4>
	</div>
	<ul class="list-group list-group-flush">
	  <li class="list-group-item">ID: ${people.id}</li>
	  <li class="list-group-item">Email: <a href="mailto:${people.email}" class="card-link">${people.email}</a></li>
	  ${lastList[0]}
	</ul>
  </div>`;
}

function createPage() {
	const cards = employees.map((people) => renderCards(people));
	let finalCard = "";
	for (text of cards) {
		finalCard += `\n` + text;
	}
	// console.log(finalCard);
	// console.log(cards);
	// console.log(employees);
	return `<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<!-- CSS only -->
			<link
				href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
				rel="stylesheet"
				integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
				crossorigin="anonymous"
			/>
			<title>Team Webpage</title>
		</head>
		<body class = "bg-dark">
			<header class = "bg-success text-white text-center mb-3 py-3">
				<h1 class my-5 py-5>My Team</h1>
			</header>
			<div
				class="container-fluid my-4 d-flex flex-fill row justify-content-center"
			>
			${finalCard}
			</div>
		</body>
	</html>
	`;
}
