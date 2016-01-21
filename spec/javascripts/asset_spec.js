describe('Asset', function() {
  var asset = null;
  var assets = [];

  beforeEach(function() {
    assets = [];
    asset = new beer.Asset({
      itle: 'stub asset',
      name: 'stub',
      order: 1,
      Shape: null,
      active: false,
      svgUrl: '/stub.svg',
    }, assets);
    assets.push(asset);
  });

  describe("#activate", function() {
    it("sets active to true", function() {
      asset.activate();
      expect(asset.active).toBe(true);
    });
  });
});
