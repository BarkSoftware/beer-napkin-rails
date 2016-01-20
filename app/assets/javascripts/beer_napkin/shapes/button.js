(function(){
  beer.shapes.Button = beer.util.createClass(fabric.Group, {
    initialize: function(buttonObjects) {
      var buttonText = new fabric.Text("Button", {
          fill: beer.options.stroke_color,
          fontFamily: 'Coming Soon',
          textAlign: 'center',
          left: 65,
          top: 20
        });
      var groupObjects = buttonObjects.concat([buttonText]);
      this.callSuper('initialize', groupObjects, {});
    }
  });
})();
