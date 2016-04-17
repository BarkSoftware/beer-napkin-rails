(function(){
  fabric.BeerButton = beer.util.createClass(fabric.Group, {
    type: 'beerButton',
    initialize: function(svgObjects, object) {
      var object = typeof object !== 'undefined' ?  object : {};
      var svgGroup = new fabric.Group(svgObjects);
      this.model = _.merge({
        text: 'Button'
      }, object.model);

      this.bottle = beer.table.bottle;
      this.napkin = beer.table.napkin;

      var buttonText;

      if (object.buttonText) {
        fabric.util.enlivenObjects([object.buttonText], _.bind(function(enlivenedObjects) {
          buttonText = _.first(enlivenedObjects);
        }, this));
      }
      else {
        buttonText = new fabric.Text(this.model.text, {
          fontFamily: beer.options.fontFamily,
          textAlign: 'center',
          left: 65,
          top: 12
        });
      }
      var button = [svgGroup, buttonText];
      this.callSuper('initialize', button, object);

      this.buttonText = buttonText;
      this.svgGroup = svgGroup;
      this.setText(this.model.text);
      (new beer.CommonAssetEvents()).bind(this);
    },
    toObject: function() {
      return _.merge(this.callSuper('toObject'), {
        model: this.model,
        svgGroup: this.svgGroup.toObject(),
        buttonText: this.buttonText.toObject()
      });
    },
    viewModel: function() {
      var obj = {};
      obj['button-text'] = { type: 'text', label: 'Button Text' };
      return obj;
    },
    setText: function(value) {
      this.model.text = value;
      this.buttonText.set('text', value);
      var width = this.buttonText.width + 80;
      this.buttonText.setLeft(-1 * (width / 2) + 40);
      this.svgGroup.scaleToWidth(width);
      this.svgGroup.setScaleY(1);
      this.svgGroup.setLeft(-1 * (width / 2));
      this.setWidth(width);
      beer.napkin.canvas.renderAll();
    },
    bind: function() {
      return Bind(this.model, {
        text: {
          dom: '#button-text',
          callback: _.bind(this.setText, this),
        }
      });
    }
  });

  fabric.BeerButton.fromObject = function (object, callback) {
    var _enlivenedObjects;
    fabric.util.enlivenObjects(object.svgGroup.objects, function (enlivenedObjects) {
      delete object.svgGroup.objects;
      _enlivenedObjects = enlivenedObjects;
    });
    return new fabric.BeerButton(_enlivenedObjects, object);
  };

  beer.assets.push(new beer.Asset({
    title: 'Button',
    order: 1,
    Shape: fabric.BeerButton,
    name: 'button',
    svgUrl: '/beer-assets/button2.svg',
  }));
})();
