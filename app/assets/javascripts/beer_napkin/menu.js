(function() {
  function appendAsset(asset) {
    $('#menu').append(asset.element());
  }

  function setMenuHeight() {
    var height = $(window).height() - 80;
    $('#menu').height(height);
  }

  beer.Menu = beer.util.createClass({
    initialize: function(assets) {
      $(window).resize(_.bind(setMenuHeight));
      setMenuHeight();
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
