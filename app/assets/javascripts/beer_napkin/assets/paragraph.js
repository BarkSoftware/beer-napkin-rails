(function(){
  fabric.BeerParagraph = beer.util.createClass(fabric.Text, {
    type: 'beerParagraph',
    initialize: function(object) {
      var object = typeof object !== 'undefined' ?  object : {};
      var defaults = _.merge({
        text: 'Lorem ipsum',
        fontFamily: 'Coming Soon',
      }, object);

      this.bottle = beer.table.bottle;
      this.napkin = beer.table.napkin;
      this.model = {
        text: defaults.text,
      };

      this.callSuper('initialize', defaults.text, defaults);

      this.on('selected', _.bind(function() {
        beer.bottle.renderShape(this);
      }, this));
    },
    viewModel: function() {
      var obj = {};
      obj['paragraph-text'] = { type: 'textarea', label: 'Text' };
      return obj;
    },
    setText: function(value) {
      this.model.text = value;
      this.set('text', value);
      beer.napkin.canvas.renderAll();
    },
    bind: function() {
      var result = Bind(this.model, {
        text: {
          dom: '#paragraph-text',
          callback: _.bind(this.setText, this)
        }
      });
      return result;
    }
  });

  fabric.BeerParagraph.fromObject = function (object, callback) {
    return new fabric.BeerParagraph(object, object);
  };


  beer.assets.push(new beer.Asset({
    title: 'Paragraph/Text',
    order: 1,
    Shape: fabric.BeerParagraph,
    name: 'paragraph',
    svgUrl: null,
  }));
})();
