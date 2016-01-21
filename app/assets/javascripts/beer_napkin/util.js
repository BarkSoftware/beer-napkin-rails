(function() {
  beer.util = {
    loadSVG: function(name, done) {
      fabric.loadSVGFromURL("/beer-assets/" + name + ".svg", function(objects, options) {
        done(objects);
      }, function(item, object) {
        object.set('id', item.getAttribute('id'));
      });
    },
    createClass: fabric.util.createClass //STEALING!
  }
})();
