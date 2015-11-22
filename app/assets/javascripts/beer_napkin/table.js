(function() {
  beer.Table = beer.util.createClass({
    initialize: function(selector) {
      this.element = $(selector);
      this.element.append("<canvas id='beer-menu'></canvas>");
      this.element.append("<canvas id='beer-napkin'></canvas>");
      this.element.append("<canvas id='beer-bottle'></canvas>");
      this.menu = new beer.Menu();
      this.napkin = new beer.Napkin();
    }
  });
})();
