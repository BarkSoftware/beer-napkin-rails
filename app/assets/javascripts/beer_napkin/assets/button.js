(function(){
  beer.assets.Button = beer.util.createClass(fabric.Group, {
    initialize: function(options) {
      var that = this;
      var buttonText = new fabric.Text("Button", {
          fill: beer.options.stroke_color,
          fontFamily: 'Coming Soon',
          textAlign: 'center',
          left: 65,
          top: 20
        });
      var groupObjects = beer.svgs.button.concat([buttonText]);
      this.callSuper('initialize', groupObjects, options);
    },
    addToNapkin: function(napkin) {
    }
  });
})();
