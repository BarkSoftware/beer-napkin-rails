(function(){
  beer.Asset = beer.util.createClass({
    initialize: function(options, assets) {
      this.assets = assets || beer.assets;
      this.title = options.title;
      this.name = options.name;
      this.order = options.order;
      this.Shape = options.Shape;
      this.svgUrl = options.svgUrl;
    },

    element: function() {
      if (this._el) {
        return this._el;
      }
      else {
        var image = $("<img src='" + this.svgUrl + "' />");
        var el = $("<div class='asset'><h5>" + this.title + "</h5></div>");
        el.prepend(image);
        el.click(_.bind(this.addToCanvas, this));
        this._el = el;
        return el;
      }
    },

    addToCanvas: function() {
      var x = 15;
      var y = 50;
      var canvas = this.canvas;
      this.createShape(beer.table.bottle, this, function(shape) {
        shape.setLeft(x);
        shape.setTop(y);
        beer.napkin.canvas.add(shape);
        beer.napkin.canvas.setActiveObject(shape);
      });
    },

    createShape: function(bottle, napkin, done) {
      var constructor = _.bind(function(objects) {
        done(new this.Shape(objects, { fill: beer.options.stroke_color }));
      }, this);
      beer.util.loadSVG(this.svgUrl, constructor);
    },
  });
})();
