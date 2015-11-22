describe("util", function() {
  describe("createClass", function() {
    it("borrows from fabric", function() {
      expect(beer.util.createClass).toBe(fabric.util.createClass);
    });
  });
});

