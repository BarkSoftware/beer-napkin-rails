$(function() {
  async.each(['button'], function(name, done) {
    beer.util.loadSVG(name, function(objects) {
      beer.svgs[name] = objects;
      done();
    });
  }, function() {
    var table = new beer.Table("#bar");
  });
});
