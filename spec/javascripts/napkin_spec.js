describe("Napkin", function() {
  beforeEach(function() {
    table = {
      element: $("#table"),
      options: stub_options,
      menu: {
        selectedAsset: stub_asset
      },
    };
    napkin = new beer.Napkin(table);
  });

  describe("initialize", function() {
    it("creates the canvas", function() {
      expect($("#table canvas#beer-napkin")[0]).toBeInDOM();
    });

    it("has a fabric Canvas", function() {
      expect(napkin.canvas).toEqual(jasmine.any(fabric.Canvas));
    });

    it("sets height and width", function() {
      var options = beer.options.napkin;
      expect(napkin.canvas.width).toEqual(options.width)
      expect(napkin.canvas.height).toEqual(options.height)
    });
  });

  describe("#addSelectedAsset", function() {
    beforeEach(function() {
      var mouseEvent = { e: { layerX: 100, layerY: 100 } };
      napkin.canvas = stub_canvas();
      napkin.addSelectedAsset(mouseEvent);
    });

    it("adds the selected asset", function() {
      expect(napkin.canvas.add).toHaveBeenCalledWith(jasmine.any(beer.shapes.Button));
    });

    it("unselects the asset in the menu", function() {
      expect(table.menu.selectedAsset().unselect).toHaveBeenCalled();
    });
  });
});
