const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
	it("should have a string value for github username", () => {
		const obj = new Engineer("Jeremy", 1, "test@email.com", "TestHub");

		expect(obj.github).toEqual("TestHub");
	});
	describe("getGithub", () => {
		it("should return the value of the github key in the Engineer object", () => {
			const obj = new Engineer("Jeremy", 1, "test@email.com", "TestHub");

			expect(obj.getGitHub()).toEqual("TestHub");
		});
	});
	describe("getRole", () => {
		it("should have Engineer as the response to getRole", () => {
			const obj = new Engineer("Jeremy", 1, "test@email.com", "TestHub");

			expect(obj.getRole()).toEqual("Engineer");
		});
	});
});
