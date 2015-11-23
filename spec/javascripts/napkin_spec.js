describe("Napkin", function() {
  beforeEach(function() {
    tableStub = { element: $("#table"), options: stub_options };
    napkin = new beer.Napkin(tableStub);
  });

  describe("initialize", function() {
    it("creates the canvas", function() {
      expect($("#table canvas#beer-napkin")[0]).toBeInDOM();
    });

    it("has a fabric Canvas", function() {
      expect(napkin.canvas).toEqual(jasmine.any(fabric.Canvas));
    });

    it("sets height and width", function() {
      var options = beer.default_options.napkin;
      expect(napkin.canvas.width).toEqual(options.width)
      expect(napkin.canvas.height).toEqual(options.height)
    });
  });
});
