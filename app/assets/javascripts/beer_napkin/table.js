(function() {
  beer.Table = beer.util.createClass({
    initialize: function(selector, options) {
      this.options = _.merge(beer.options, options);
      this.element = $(selector);
      this.menu = new beer.Menu(this);
      this.napkin = new beer.Napkin(this);
      this.bottle = new beer.Bottle(this);
    }
  });
})();
