$(function() {
  async.each(['button'], function(name, done) {
    fabric.loadSVGFromURL("/beer-assets/" + name + ".svg", function(objects, options) {
      beer.svgs[name] = objects;
      done();
    }, function(item, object) {
      object.set('id', item.getAttribute('id'));
    });
  }, function() {
    var table = new beer.Table("#bar");
  });
});
