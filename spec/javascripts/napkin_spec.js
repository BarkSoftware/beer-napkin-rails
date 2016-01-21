describe('Napkin', function() {
  var table = null;
  var menu = null;
  var napkin = null;
  var asset = null;

  beforeEach(function() {
    asset = stub_asset();
    menu = {
      activeAsset: function() { return asset; }
    };
    table = {
      element: $('#table'),
      menu: menu,
    };
    napkin = new beer.Napkin(table, menu);
  });

  describe('initialize', function() {
    it('creates the canvas', function() {
      expect($('#table canvas#beer-napkin')[0]).toBeInDOM();
    });

    it('has a fabric Canvas', function() {
      expect(napkin.canvas).toEqual(jasmine.any(fabric.Canvas));
    });

    it('sets height and width', function() {
      var options = beer.options.napkin;
      expect(napkin.canvas.width).toEqual(options.width)
      expect(napkin.canvas.height).toEqual(options.height)
    });
  });

  describe('#addActiveAsset', function() {
    beforeEach(function() {
      var mouseEvent = { e: { layerX: 100, layerY: 100 } };
      napkin.canvas = stub_canvas();
      napkin.addActiveAsset(mouseEvent);
    });

    it('calls createShape on the asset', function() {
      expect(asset.createShape).toHaveBeenCalled();
    });
  });
});
