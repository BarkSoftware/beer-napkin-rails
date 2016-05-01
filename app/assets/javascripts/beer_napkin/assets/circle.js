(function(){
  fabric.BeerCircle = beer.util.createClass(fabric.Group, {
    type: 'beerCircle',
    initialize: function(objects, object) {
      this.bottle = beer.table.bottle;
      this.svg = _.first(objects)
      this.callSuper('initialize', objects, object);
      var svgUrl = '/beer-assets/circle.svg';

      if (!this.svg) {
        fabric.loadSVGFromURL(svgUrl, _.bind(function(objects) {
          var group = new fabric.Group(objects);
          this.set({ width: group.getWidth(), height: group.getHeight() })
          this.remove(this.svg);
          this.svg = group;
          this.add(this.svg);
          this.setCoords();
          var scaleX = this.getScaleX();
          var scaleY = this.getScaleY();
          var left = (-1 * (this.getWidth() / 2)) / scaleX;
          var top = (-1 * (this.getHeight() / 2)) / scaleY;
          group.set({ left: left, top: top });
          beer.napkin.canvas.renderAll();
        }, this), _.bind(function(item, object) {
          object.set('id', item.getAttribute('id'));
        }, this));
      }

      (new beer.CommonAssetEvents()).bind(this);
    },
    viewModel: function() {
      var obj = {};
      return obj;
    },
    bind: function() {
      //no-op
    }
  });

  fabric.BeerCircle.fromObject = function (object, callback) {
    var _enlivenedObjects;
    fabric.util.enlivenObjects(object.objects, function (enlivenedObjects) {
      _enlivenedObjects = enlivenedObjects;
    });
    callback && callback(new fabric.BeerCircle(_enlivenedObjects, object));
  };

  fabric.BeerCircle.async = true;

  beer.assets.push(new beer.Asset({
    title: 'Circle',
    order: 1,
    Shape: fabric.BeerCircle,
    name: 'circle',
    menuImage: '/beer-assets/circle.svg',
    menuImageWidth: 40,
    createShape: function(bottle, napkin, done) {
      done(new fabric.BeerCircle([], {  fill: beer.options.stroke_color }));
    }
  }));
})();
