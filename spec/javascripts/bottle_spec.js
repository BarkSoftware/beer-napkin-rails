describe("Bottle", function() {
  var tableStub;
  var bottle;
  var stubAsset;

  beforeEach(function() {
    tableStub = { element: $("#table"), options: stub_options };
    bottle = new beer.Bottle(tableStub);
    stubAsset = new fabric.Rect();
  });

  describe("#initialize", function() {
    it("adds itself to the table", function() {
      expect(tableStub.bottle).toBe(bottle);
    });

    it("adds the canvas", function() {
      expect($("#table canvas#beer-bottle")[0]).toBeInDOM();
    });

    it("has a fabric Canvas", function() {
      expect(bottle.canvas).toEqual(jasmine.any(fabric.Canvas));
    });

    it("sets width", function() {
      expect(bottle.canvas.width).toEqual($(window).width());
    });

    it("sets height", function() {
      expect(bottle.canvas.height).toEqual(beer.default_options.bottle.height);
    });
  });
});
