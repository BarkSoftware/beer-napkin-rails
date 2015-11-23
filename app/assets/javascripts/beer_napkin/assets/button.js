(function(){
  beer.assets.Button = beer.util.createClass(fabric.Rect, {
    initialize: function(options) {
      options = options || {};
      _.merge(options, {
        width: 10, height: 20,
        left: 100, top: 100,
        fill: 'yellow',
        angle: 30
      });
      this.callSuper('initialize', options);
    }
  });
})();
