(function() {
  beer.util = {
    loadSVG: function(url, done) {
      fabric.loadSVGFromURL(url, function(objects, options) {
        done(objects);
      }, function(item, object) {
        object.set('id', item.getAttribute('id'));
      });
    },
    createClass: fabric.util.createClass //STEALING!
  }
})();
