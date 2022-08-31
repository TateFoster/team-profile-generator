// const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager class", () => {
	it("should have a value for office number", () => {
		const obj = new Manager("Jeremy", 1, "test@email.com", 5);

		expect(obj.officeNumber).toEqual(5);
	});
	describe("getRole", () => {
		it("should have Manager as the response to getRole", () => {
			const obj = new Manager("Jeremy", 1, "test@email.com", 5);

			expect(obj.getRole()).toEqual("Manager");
		});
	});
});
