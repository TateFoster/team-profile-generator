const Intern = require("../lib/Intern");

describe("Intern class", () => {
	it("should have a string value for school username", () => {
		const obj = new Intern("Jeremy", 1, "test@email.com", "Test School");

		expect(obj.school).toEqual("Test School");
	});
	describe("getSchool", () => {
		it("should return the value of the school key in the Intern object", () => {
			const obj = new Intern("Jeremy", 1, "test@email.com", "Test School");

			expect(obj.getSchool()).toEqual("Test School");
		});
	});
	describe("getRole", () => {
		it("should have Intern as the response to getRole", () => {
			const obj = new Intern("Jeremy", 1, "test@email.com", "Test School");

			expect(obj.getRole()).toEqual("Intern");
		});
	});
});
