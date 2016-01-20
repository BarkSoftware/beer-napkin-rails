(function(){
  var getButtonObjects = function(done) {
    fabric.loadSVGFromURL("/beer-assets/button.svg", function(objects, options) {
      done(objects);
    }, function(item, object) {
      object.set('id', item.getAttribute('id'));
    });
  };

  beer.assets.Button = beer.util.createClass(fabric.Group, {
    initialize: function(table) {
      var buttonText = new fabric.Text("Button", {
          fill: beer.options.stroke_color,
          fontFamily: 'Coming Soon',
          textAlign: 'center',
          left: 65,
          top: 20
        });
      var finished = _.bind(function(assets) {
        var groupObjects = beer.svgs.button.concat([buttonText]);
        this.callSuper('initialize', groupObjects, {});
      }, this);
      async.map(beer.svgs.button, function(obj, done) { obj.clone(done) }, finished);
    },

    addShape: function(done) {
      getButtonObjects(function(objects) {
        done(new beer.shapes.Button(objects));
      });
    }
  });
})();
