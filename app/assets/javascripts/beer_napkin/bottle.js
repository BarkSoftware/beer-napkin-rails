(function() {
  beer.Bottle = beer.util.createClass({
    initialize: function(table) {
      table.bottle = this;
      this.table = table;
      this.element = $("<canvas id='beer-bottle'></canvas>");
      table.element.find("#bottle").append(this.element);
    }
  });
})();
