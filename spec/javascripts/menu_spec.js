describe("Menu", function() {
  var menu;
  var stubAsset = {
    element: function() {
      return $("<div class='stub-asset'></div>");
    }
  };

  beforeEach(function() {
    assets = [stubAsset];
    menu = new beer.Menu(assets);
  });

  describe('#initialize', function() {
    it('adds the assets to the dom', function() {
      expect($("#menu .stub-asset")[0]).toBeInDOM();
    });
  });

  describe('#activeAsset', function() {
    it('finds the first active asset', function() {
      var activeAsset = { active: true };
      assets.push(activeAsset);
      expect(menu.activeAsset()).toBe(activeAsset)
    });
  });
});
