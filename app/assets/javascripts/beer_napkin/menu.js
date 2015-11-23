(function() {
  beer.Menu = beer.util.createClass({
    initialize: function(table) {
      this.options = table.options;
      table.menu = this;
      this.element = $("<canvas id='beer-menu'></canvas>");
      table.element.find("#menu").append(this.element);
      this.canvas = new fabric.Canvas("beer-menu", {
        width: 200,
        height: $(window).height() - beer.default_options.bottle.height
      });
      this.assets = new beer.AssetLoader().load(this.options.assets);
      _.each(this.assets, _.bind(function(asset) {
        this.canvas.add(asset);
      }, this));
    }
  });
})();
