(function(){
  fabric.BeerRadio = beer.util.createClass(fabric.Group, {
    type: 'beerRadio',
    initialize: function(objects, object) {
      this.model = _.merge({
        checked: 'checked',
      }, object.model);
      this.bottle = beer.table.bottle;
      this.svg = _.first(objects)
      this.callSuper('initialize', objects, object);
      (new beer.CommonAssetEvents()).bind(this);
    },
    toObject: function() {
      return _.merge(this.callSuper('toObject'), {
        model: this.model,
      });
    },
    viewModel: function() {
      var obj = {};
      obj['radio-checked'] = [
        { type: 'radio', label: 'Checked', value: 'checked' },
        { type: 'radio', label: 'Unchecked', value: 'unchecked' }
      ];
      return obj;
    },
    setChecked: function(value) {
      this.model.checked = value;
      var svgUrl = '/beer-assets/radio-' + value + '.svg';

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
    },
    bind: function() {
      return Bind(this.model, {
        checked: {
          dom: 'input[name=radio-checked]',
          callback: _.bind(this.setChecked, this),
        }
      });
    }
  });

  fabric.BeerRadio.fromObject = function (object, callback) {
    var _enlivenedObjects;
    fabric.util.enlivenObjects(object.objects, function (enlivenedObjects) {
      _enlivenedObjects = enlivenedObjects;
    });
    callback && callback(new fabric.BeerRadio(_enlivenedObjects, object));
  };

  fabric.BeerRadio.async = true;

  beer.assets.push(new beer.Asset({
    title: 'Radio',
    order: 1,
    Shape: fabric.BeerRadio,
    name: 'radio',
    menuImage: '/beer-assets/radio-checked.svg',
    menuImageWidth: 30,
    createShape: function(bottle, napkin, done) {
      done(new fabric.BeerRadio([], {  fill: beer.options.stroke_color }));
    }
  }));
})();
