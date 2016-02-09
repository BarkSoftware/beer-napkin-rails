(function() {
  function appendAsset(asset) {
    $('#menu').append(asset.element());
  }

  beer.Menu = beer.util.createClass({
    initialize: function(assets) {
      this.assets = assets;
      this.element = $("#menu");
      _.each(this.assets, appendAsset);
    },

    activeAsset: function() {
      return _.find(this.assets, function(asset) {
        return asset.active;
      });
    },
  });
})();
