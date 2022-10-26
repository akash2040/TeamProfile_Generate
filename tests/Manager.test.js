const Manager = require("../lib/Manager");

describe("Manager Class", () => {
  describe("Initialization", () => {
    const manager = new Manager("Alex", 900);
    it("Should create an object with an id and name", () => {
      expect(manager.name).toEqual("Alex");
      expect(manager.id).toEqual(900);
    });
    it("Should return the Employee name when requested", () => {
      expect(manager.getName()).toBe("Alex");
    });

    it("Should return the Employee id when requested", () => {
      expect(manager.getId()).toBe(900);
    });
  });
});
