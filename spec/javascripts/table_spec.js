describe("Table", function() {
  var table;
  describe("#initialize", function() {
    beforeEach(function() {
      loadFixtures('table.html')
      table = new beer.Table("#table");
    });

    it("sets the menu", function() {
      expect(table.menu).toEqual(jasmine.any(beer.Menu));
    });

    it("sets the napkin", function() {
      expect(table.napkin).toEqual(jasmine.any(beer.Napkin));
    });

    it("sets the bottle", function() {
      expect(table.bottle).toEqual(jasmine.any(beer.Bottle));
    });

    it("defaults options", function() {
      expect(table.options).toEqual(beer.options);
    });
  });
});
