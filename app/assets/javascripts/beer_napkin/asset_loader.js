(function() {
  beer.AssetLoader = beer.util.createClass({
    initialize: function(table) {
      this.table = table;
    },

    load: function(options) {
      var constructor = _.bind(function(o) {
        var asset = new beer.assets[o.type]({
          selectable: false,
        });
        return new beer.AssetWrapper(asset, this.table);
      }, this);

      return _.map(options, constructor);
    }
  });
})();
