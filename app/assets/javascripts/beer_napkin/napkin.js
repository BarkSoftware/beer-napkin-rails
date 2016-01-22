(function() {
  beer.Napkin = beer.util.createClass({
    initialize: function(table, menu) {
      this.table = table;
      this.menu = menu;
      this.element = $("<canvas id='beer-napkin'></canvas>");
      table.element.find("#napkin").append(this.element);
      var options = beer.options.napkin;
      this.canvas = new fabric.Canvas("beer-napkin", {
        width: options.width,
        height: options.height
      });
      this.canvas.on('mouse:up', _.bind(this.addActiveAsset, this));
      this.canvas.on('selection:cleared', _.bind(function() {
        this.table.bottle.element.empty();
      }, this));
    },

    addActiveAsset: function(mouseEvent) {
      var asset = this.menu.activeAsset();
      if (asset) {
        var x = mouseEvent.e.layerX;
        var y = mouseEvent.e.layerY;
        var canvas = this.canvas;
        asset.createShape(this.table.bottle, this, function(shape) {
          shape.setLeft(x);
          shape.setTop(y);
          canvas.add(shape);
          canvas.setActiveObject(shape);
          asset.deactivate();
        });
      }
    }
  });
})();
