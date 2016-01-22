(function(){
  var Button = beer.util.createClass(fabric.Group, {
    initialize: function(objects, bottle, napkin) {
      this.bottle = bottle;
      this.napkin = napkin;
      this.svg = new fabric.Group(objects);
      this.buttonText = new fabric.Text('Button', {
        fill: beer.options.stroke_color,
        fontFamily: 'Coming Soon',
        textAlign: 'center',
        left: 65,
        top: 20
      });

      this.model = {
        text: 'Button'
      }

      var groupObjects = objects.concat([this.buttonText]);
      var button = [this.svg, this.buttonText];
      this.callSuper('initialize', button, {});
      this.on('selected', _.bind(function() {
        this.bottle.renderShape(this);
      }, this));
    },
    template: function() {
      return "<label>Button Text</label> <input type='text' id='button-text' name='button-text' />";
    },
    bind: function() {
      var updateText = _.bind(function(value) {
        this.model.text = value;
        this.buttonText.set('text', value);
        var width = this.buttonText.width + 80;
        this.buttonText.setLeft(-1 * (width / 2) + 40);
        this.svg.scaleToWidth(width);
        this.svg.setScaleY(1);
        this.svg.setLeft(-1 * (width / 2));
        this.setWidth(width);
        this.napkin.canvas.renderAll();
      }, this);
      return Bind(this.model, {
        text: {
          dom: '#button-text',
          callback: updateText,
        }
      });
    }
  });

  beer.assets.push(new beer.Asset({
    title: 'Button',
    order: 1,
    Shape: Button,
    name: 'button',
    svgUrl: '/beer-assets/button.svg',
  }));
})();
