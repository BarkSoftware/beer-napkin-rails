(function(){
  fabric.BeerCheckbox = beer.util.createClass(fabric.Group, {
    type: 'beerCheckbox',
    initialize: function(objects, object) {
      if (!Array.isArray(objects)) {
        object = objects;
        objects = [];
      }
      var object = typeof object !== 'undefined' ?  object : {};
      this.model = _.merge({
        checked: true
      }, object.model);

      var constructor = _.bind(function(objects) {
        this.addWithUpdate(new fabric.Group(objects, { selectable: false }));
        this.setCoords();
        this.napkin.canvas.renderAll();
      }, this);

      var svgUrl = '/beer-assets/checkbox-checked.svg';
      beer.util.loadSVG(svgUrl, constructor);

      this.bottle = beer.table.bottle;
      this.napkin = beer.table.napkin;

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
      obj['checkbox-checked'] = { type: 'checkbox', label: 'Checked', value: '1' };
      return obj;
    },
    setChecked: function(value) {
      this.model.checked = value;
      var svgUrl = '';
      debugger;
      if (value) {
        svgUrl = '/beer-assets/checkbox-checked.svg';
      }
      else {
        svgUrl = '/beer-assets/checkbox-unchecked.svg';
      }
      _.each(this._objects, _.bind(function(obj) {
        this.removeWithUpdate(obj);
      }, this));
      beer.util.loadSVG(svgUrl, _.bind(function(objects) {
        this.addWithUpdate(new fabric.Group(objects));
        this.setCoords();
        this.napkin.canvas.renderAll();
      }, this));
    },
    bind: function() {
      return Bind(this.model, {
        checked: {
          dom: 'input[name=checkbox-checked]',
          callback: _.bind(this.setChecked, this),
        }
      });
    }
  });

  fabric.BeerButton.fromObject = function (object, callback) {
    var _enlivenedObjects;
    fabric.util.enlivenObjects(object.objects, function (enlivenedObjects) {
      _enlivenedObjects = enlivenedObjects;
    });
    return new fabric.BeerButton(_enlivenedObjects, object);
  };

  beer.assets.push(new beer.Asset({
    title: 'Checkbox',
    order: 1,
    Shape: fabric.BeerCheckbox,
    name: 'checkbox',
    menuImage: '/beer-assets/checkbox-checked.svg'
  }));
})();
