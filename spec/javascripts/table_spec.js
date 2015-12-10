describe("Table", function() {
  var table;
  describe("#initialize", function() {
    beforeEach(function() {
      loadFixtures('table.html')
      table = new beer.Table("#table", stub_options);
    });

    it("adds menu to the DOM", function() {
      expect($("#table canvas#beer-menu")[0]).toBeInDOM();
    });

    it("adds napkin to the DOM", function() {
      expect($("#table canvas#beer-napkin")[0]).toBeInDOM();
    });

    it("adds bottle to the DOM", function() {
      expect($("#table canvas#beer-bottle")[0]).toBeInDOM();
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

    describe("when options not provided", function() {
      beforeEach(function() {
        table = new beer.Table("#table");
      });

      it("defaults options", function() {
        expect(table.options).toEqual(beer.options);
      });
    });
  });
});
