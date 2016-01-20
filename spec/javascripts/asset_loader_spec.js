describe("AssetLoader", function() {
  var loader;
  var assets;
  var table = {};
  var options = [
    { type: 'Button', collection: 'wireframe' }
  ];

  beforeEach(function() {
    loader = new beer.AssetLoader(table);
  });

  describe("load", function() {
    it("returns assets", function() {
      expect(loader.load(options)).toContain(jasmine.any(beer.AssetWrapper));
    });
  });
});
