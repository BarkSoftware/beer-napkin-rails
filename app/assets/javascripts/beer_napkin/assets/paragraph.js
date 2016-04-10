(function(){
  fabric.BeerParagraph = beer.util.createClass(fabric.Text, {
    type: 'beerParagraph',
    initialize: function(object) {
      var object = typeof object !== 'undefined' ?  object : {};
      var defaults = _.merge({
        text: 'Lorem ipsum',
        fontFamily: beer.options.fontFamily,
        fontWeight: 'normal',
        textDecoration: '',
        textAlign: 'left',
      }, object);

      this.bottle = beer.table.bottle;
      this.napkin = beer.table.napkin;
      this.model = {
        textDecoration: defaults.textDecoration,
        text: defaults.text,
        fontWeight: defaults.fontWeight,
        textAlign: defaults.textAlign,
      };

      this.callSuper('initialize', defaults.text, defaults);
      (new beer.CommonAssetEvents()).bind(this);
    },
    viewModel: function() {
      var obj = {};
      obj['paragraph-text'] = { type: 'textarea', label: 'Text' };
      obj['paragraph-text-align-header'] = { type: 'h5', label: 'Text Align' };
      obj['paragraph-text-align'] = [
        { type: 'radio', label: 'Left', value: 'left' },
        { type: 'radio', label: 'Right', value: 'right' },
        { type: 'radio', label: 'Center', value: 'center' },
      ];
      obj['paragraph-font-weight-header'] = { type: 'h5', label: 'Font Weight' };
      obj['paragraph-font-weight'] = [
        { type: 'radio', label: 'Normal', value: 'normal' },
        { type: 'radio', label: 'Bold', value: 'bold' },
      ];
      obj['paragraph-text-decoration-header'] = { type: 'h5', label: 'Text Decoration' };
      obj['paragraph-text-decoration'] = [
        { type: 'radio', label: 'None', value: '' },
        { type: 'radio', label: 'Underline', value: 'underline' },
        { type: 'radio', label: 'Strike-through', value: 'line-through' },
      ];
      return obj;
    },
    setText: function(value) {
      this.model.text = value;
      this.set('text', value);
      beer.napkin.canvas.renderAll();
    },
    setFontWeight: function(fontWeight) {
      this.model.fontWeight = fontWeight;
      this.set('fontWeight', fontWeight);
      beer.napkin.canvas.renderAll();
    },
    setTextDecoration: function(textDecoration) {
      this.model.textDecoration = textDecoration;
      this.set('textDecoration', textDecoration);
      beer.napkin.canvas.renderAll();
    },
    setTextAlign: function(textAlign) {
      this.model.textAlign = textAlign;
      this.set('textAlign', textAlign);
      beer.napkin.canvas.renderAll();
    },
    bind: function() {
      var result = Bind(this.model, {
        text: {
          dom: '#paragraph-text',
          callback: _.bind(this.setText, this)
        },
        fontWeight: {
          dom: 'input[name="paragraph-font-weight"]',
          callback: _.bind(this.setFontWeight, this)
        },
        textDecoration: {
          dom: 'input[name="paragraph-text-decoration"]',
          callback: _.bind(this.setTextDecoration, this)
        },
        textAlign: {
          dom: 'input[name="paragraph-text-align"]',
          callback: _.bind(this.setTextAlign, this)
        },
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
