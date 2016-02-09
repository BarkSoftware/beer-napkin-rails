(function() {
  beer.Bottle = beer.util.createClass({
    initialize: function(table) {
      beer.bottle = this;
      table.bottle = this;
      this.table = table;
      this.element = $("<div id='beer-bottle'></div>");
      table.element.find("#bottle").append(this.element);
    },

    renderShape: function(shape) {
      this.table.menu.element.hide();
      this.element.empty();
      this.element.append(shape.template);
      shape.bind();
    }
  });
})();
