(function() {
  beer.Napkin = beer.util.createClass({
    initialize: function(table) {
      this.table = table;
      this.element = $("<canvas id='beer-napkin'></canvas>");
      table.element.find("#napkin").append(this.element);
      var options = beer.options.napkin;
      this.canvas = new fabric.Canvas("beer-napkin", {
        width: options.width,
        height: options.height
      });

      this.canvas.on('mouse:up', _.bind(this.addSelectedAsset, this));
    },

    addSelectedAsset: function(mouseEvent) {
      var asset = this.table.menu.selectedAsset();
      if (asset) {
        var x = mouseEvent.e.layerX;
        var y = mouseEvent.e.layerY;
        var canvas = this.canvas;
        asset.addShape(function(shape) {
          shape.setLeft(x);
          shape.setTop(y);
          canvas.add(shape);
          asset.deselect();
        });
      }
    }
  });
})();
