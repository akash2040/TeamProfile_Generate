const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
  describe("Initialization", () => {
    const engineer = new Engineer("Nabin", 900);
    it("Should create an object with an id and name", () => {
      expect(engineer.name).toEqual("Nabin");
      expect(engineer.id).toEqual(900);
    });
    it("Should return the Employee name when requested", () => {
      expect(engineer.getName()).toBe("Nabin");
    });

    it("Should return the Employee id when requested", () => {
      expect(engineer.getId()).toBe(900);
    });
  });
});
