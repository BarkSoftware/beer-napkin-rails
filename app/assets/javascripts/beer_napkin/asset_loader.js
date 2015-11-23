(function() {
  beer.AssetLoader = beer.util.createClass({
    load: function(options) {
      return _.map(options, function(o) {
        return new beer.assets[o.type]();
      });
    }
  });
})();
