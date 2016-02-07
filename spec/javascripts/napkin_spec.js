describe('Napkin', function() {
  var table = null;
  var menu = null;
  var napkin = null;
  var asset = null;
  var options = {};

  beforeEach(function() {
    asset = stub_asset();
    menu = {
      activeAsset: function() { return asset; }
    };
    table = {
      element: $('#table'),
      menu: menu,
    };
  });

  describe('initialize', function() {
    it('creates the canvas', function() {
      napkin = new beer.Napkin(table, menu, options);
      expect($('#table canvas#beer-napkin')[0]).toBeInDOM();
    });

    it('has a fabric Canvas', function() {
      napkin = new beer.Napkin(table, menu, options);
      expect(napkin.canvas).toEqual(jasmine.any(fabric.Canvas));
    });

    it('sets height and width', function() {
      napkin = new beer.Napkin(table, menu, options);
      var options = beer.options.napkin;
      expect(napkin.canvas.width).toEqual(options.width)
      expect(napkin.canvas.height).toEqual(options.height)
    });

    describe('when json is provided', function() {
      var json = {};
      beforeEach(function() {
        fabric.Canvas = stubCanvas;
        options.json = json;
      });

      it('initializes the canvas with given json', function() {
        napkin = new beer.Napkin(table, menu, options);
        expect(napkin.canvas.loadFromJSON).toHaveBeenCalledWith(json);
      });
    });
  });

  describe('#addActiveAsset', function() {
    beforeEach(function() {
      var mouseEvent = { e: { layerX: 100, layerY: 100 } };
      napkin.canvas = stubCanvas();
      napkin.addActiveAsset(mouseEvent);
      napkin = new beer.Napkin(table, menu, options);
    });

    it('calls createShape on the asset', function() {
      expect(asset.createShape).toHaveBeenCalled();
    });
  });
});
