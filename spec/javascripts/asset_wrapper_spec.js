describe("AssetWrapper", function() {
  var wrapper;
  var asset;

  beforeEach(function() {
    asset = new fabric.Group([]);
    table = {
      menu: {
        selectedAsset: null,
        selectAsset: sinon.spy()
      }
    };
    wrapper = new beer.AssetWrapper(asset, table);
  });

  describe("#selectAsset", function() {
    it("sets 'selectedAsset' on menu", function() {
      wrapper.select();
      expect(table.menu.selectedAsset).toEqual(wrapper);
    });
  });
});
