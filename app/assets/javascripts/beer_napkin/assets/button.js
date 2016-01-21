(function(){
  var Button = beer.util.createClass(fabric.Group, {
    initialize: function(objects) {
      var buttonText = new fabric.Text('Button', {
        fill: beer.options.stroke_color,
        fontFamily: 'Coming Soon',
        textAlign: 'center',
        left: 65,
        top: 20
      });

      var groupObjects = objects.concat([buttonText]);
      this.callSuper('initialize', groupObjects, {});
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
