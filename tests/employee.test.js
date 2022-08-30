const Employee = require("../lib/Employee");

describe("Employee class", () => {
	it("should have a string value as the name key in the Employee object", () => {
		const obj = new Employee("Jeremy", id, email);
		const testName = "Jeremy";

		expect(obj.name).toEqual(testName);
	});
	it("should have a numeric or string value as the id in the Employee object", () => {
		const obj = new Employee(name, 1, email);
		const testNum = 1;

		expect(obj.id).toEqual(testNum);
	});
	it("should have a string value as an email in the employee object");
	const obj = new Employee(name, id, "test@email.com");
	const testEmail = "test@email.com";

	expect(obj.email).toEqual(testEmail);

	describe("getName", () => {
		it("should return the value of the name key in the employee object"),
			() => {
				const obj = new Employee("Jeremy", 1, "test@email.com");

				expect(obj.getName()).toEqual("Jeremy");
			};
	});
	describe("getId", () => {
		it("should return the value of the id key in the employee object"),
			() => {
				const obj = new Employee("Jeremy", 1, "test@email.com");

				expect(obj.getId()).toEqual(1);
			};
	});
	describe("getEmail", () => {
		it("should return the value of the email key in the employee object"),
			() => {
				const obj = new Employee("Jeremy", 1, "test@email.com");

				expect(obj.getEmail()).toEqual("test@gmail.com");
			};
	});
	describe("getRole", () => {
		it("should return the value of the role key in the employee object"),
			() => {
				const obj = new Employee("Jeremy", 1, "test@email.com");

				expect(obj.getEmail()).toEqual("Employee");
			};
	});
});
