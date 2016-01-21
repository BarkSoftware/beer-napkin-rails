(function() {
  beer.Table = beer.util.createClass({
    initialize: function(selector, options) {
      this.options = _.merge(beer.options, options);
      this.element = $(selector);
      this.menu = new beer.Menu(beer.assets);
      this.napkin = new beer.Napkin(this, this.menu);
      this.bottle = new beer.Bottle(this);
    }
  });
})();
