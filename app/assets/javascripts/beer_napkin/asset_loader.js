(function() {
  beer.AssetLoader = beer.util.createClass({
    load: function(options) {
      return _.map(options, function(o) {
        var asset = new beer.assets[o.type]({
          selectable: false,
        });
        return new beer.AssetWrapper(asset, {
          left: 0,
          top: 0,
        });
      });
    }
  });
})();
