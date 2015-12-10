(function(){
  beer.assets.Label = beer.util.createClass(fabric.Text, {
    initialize: function(options) {
      this.callSuper('initialize', 'Hello World', options);
    }
  });
})();
