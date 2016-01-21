(function() {
  beer.Napkin = beer.util.createClass({
    initialize: function(table, menu) {
      this.menu = menu;
      this.element = $("<canvas id='beer-napkin'></canvas>");
      table.element.find("#napkin").append(this.element);
      var options = beer.options.napkin;
      this.canvas = new fabric.Canvas("beer-napkin", {
        width: options.width,
        height: options.height
      });
      this.canvas.on('mouse:up', _.bind(this.addActiveAsset, this));
    },

    addActiveAsset: function(mouseEvent) {
      var asset = this.menu.activeAsset();
      if (asset) {
        var x = mouseEvent.e.layerX;
        var y = mouseEvent.e.layerY;
        var canvas = this.canvas;
        asset.createShape(function(shape) {
          shape.setLeft(x);
          shape.setTop(y);
          canvas.add(shape);
          asset.deactivate();
        });
      }
    }
  });
})();
