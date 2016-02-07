(function() {
  beer.Table = beer.util.createClass({
    initialize: function(selector, options) {
      beer.table = this;
      this.options = _.merge(beer.options, options);
      this.element = $(selector);
      this.element.data('table', this);
      this.menu = new beer.Menu(beer.assets);
      this.napkin = new beer.Napkin(this, this.menu, this.options);
      this.bottle = new beer.Bottle(this);
    }
  });
})();
