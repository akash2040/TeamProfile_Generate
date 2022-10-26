const Employee = require("../lib/Employee");

describe("Employee Class", () => {
  describe("Initialization", () => {
    const employee = new Employee("Akash", 900);
    it("Should create an object with an id and name", () => {
      expect(employee.name).toEqual("Akash");
      expect(employee.id).toEqual(900);
    });
    it("Should return the Employee name when requested", () => {
      expect(employee.getName()).toBe("Akash");
    });

    it("Should return the Employee id when requested", () => {
      expect(employee.getId()).toBe(900);
    });
  });
});
