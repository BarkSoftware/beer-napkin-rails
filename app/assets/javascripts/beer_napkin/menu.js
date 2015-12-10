(function() {
  beer.Menu = beer.util.createClass({
    initialize: function(table) {
      this.options = table.options;
      table.menu = this;
      this.element = $("<canvas id='beer-menu'></canvas>");
      table.element.find("#menu").append(this.element);
      this.canvas = new fabric.Canvas("beer-menu", {
        width: 200,
        height: $(window).height() - beer.options.bottle.height
      });
      this.assets = new beer.AssetLoader().load(this.options.assets);
      _.each(this.assets, _.bind(function(asset) {
        this.canvas.add(asset);
      }, this));
      this.canvas.renderAll();
      this.canvas.on('before:selection:cleared', _.bind(function() {
        var obj = this.canvas.getActiveObject();
        var isAsset = (
          (typeof(obj) !== 'undefined') && obj.deselectAsset
        )
        if(isAsset) {
          obj.deselectAsset();
        }
      }, this));
    }
  });
})();
