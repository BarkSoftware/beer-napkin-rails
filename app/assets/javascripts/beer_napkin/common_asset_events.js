(function() {
  beer.CommonAssetEvents = function() {}

  beer.CommonAssetEvents.prototype.bind = function(shape) {
    shape.on('selected', function() {
      beer.bottle.renderShape(shape);
    });
  }
})();
