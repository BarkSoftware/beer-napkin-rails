(function(){
  fabric.BeerTextInput = beer.util.createClass(fabric.Group, {
    type: 'beerTextInput',
    initialize: function(objects, object) {
      this.bottle = beer.table.bottle;
      this.svg = _.first(objects)
      this.callSuper('initialize', objects, object);
      var svgUrl = '/beer-assets/text-input.svg';

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

  fabric.BeerTextInput.fromObject = function (object, callback) {
    var _enlivenedObjects;
    fabric.util.enlivenObjects(object.objects, function (enlivenedObjects) {
      _enlivenedObjects = enlivenedObjects;
    });
    callback && callback(new fabric.BeerTextInput(_enlivenedObjects, object));
  };

  fabric.BeerTextInput.async = true;

  beer.assets.push(new beer.Asset({
    title: 'Text Input',
    order: 1,
    Shape: fabric.BeerTextInput,
    name: 'text-input',
    menuImage: '/beer-assets/text-input.svg',
    createShape: function(bottle, napkin, done) {
      done(new fabric.BeerTextInput([], {  fill: beer.options.stroke_color }));
    }
  }));
})();
