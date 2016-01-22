(function() {
  beer.Bottle = beer.util.createClass({
    initialize: function(table) {
      table.bottle = this;
      this.table = table;
      this.element = $("<div id='beer-bottle'></div>");
      table.element.find("#bottle").append(this.element);
    },

    renderShape: function(shape) {
      this.element.empty();
      this.element.append(shape.template);
      shape.bind();
    }
  });
})();
