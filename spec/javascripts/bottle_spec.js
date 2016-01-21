describe("Bottle", function() {
  var table;
  var bottle;

  beforeEach(function() {
    table = { element: $("#table") };
    bottle = new beer.Bottle(table);
  });

  describe("#initialize", function() {
    it("adds itself to the table", function() {
      expect(table.bottle).toBe(bottle);
    });
  });
});
