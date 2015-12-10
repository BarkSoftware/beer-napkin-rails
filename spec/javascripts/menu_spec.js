describe("Menu", function() {
  var tableStub;
  var menu;
  var stubAsset;

  beforeEach(function() {
    tableStub = { element: $("#table"), options: stub_options };
    menu = new beer.Menu(tableStub);
    stubAsset = new fabric.Rect();
  });

  describe("#initialize", function() {
    it("adds itself to the table", function() {
      expect(tableStub.menu).toBe(menu);
    });

    it("adds the canvas", function() {
      expect($("#table canvas#beer-menu")[0]).toBeInDOM();
    });

    it("has a fabric Canvas", function() {
      expect(menu.canvas).toEqual(jasmine.any(fabric.Canvas));
    });

    it("sets width", function() {
      expect(menu.canvas.width).toEqual(beer.options.menu.width);
    });

    it("sets height", function() {
      expect(menu.canvas.height).toEqual(beer.options.menu.height);
    });

    it("puts assets on the canvas", function() {
      expect(menu.canvas.getObjects()).toContain(menu.assets[0]);
    });
  });
});
