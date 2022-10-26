const Intern = require("../lib/Intern");

describe("Intern Class", () => {
  describe("Initialization", () => {
    const intern = new Intern("Jack", 900);
    it("Should create an object with an id and name", () => {
      expect(intern.name).toEqual("Jack");
      expect(intern.id).toEqual(900);
    });
    it("Should return the Employee name when requested", () => {
      expect(intern.getName()).toBe("Jack");
    });

    it("Should return the Employee id when requested", () => {
      expect(intern.getId()).toBe(900);
    });
  });
});
