(function() {
  beer.Bottle = beer.util.createClass({
    initialize: function(table) {
      beer.bottle = this;
      table.bottle = this;
      this.table = table;
      this.menu = table.menu;
      this.element = $("<form id='beer-bottle'></form>");
      table.element.find("#bottle").append(this.element);
    },

    renderShape: function(shape) {
      this.table.menu.element.hide();
      this.element.empty();
      var form = $("<form></form");
      form.append(this.buildTemplate(shape.viewModel()));
      form.append("<div class='form-group'><button type='submit' class='btn btn-sm'>Ok</button></div>");
      this.element.append(form);
      form.submit(_.bind(function() {
        shape.canvas.trigger('object:modified');
        shape.canvas.deactivateAll().renderAll();
        this.remove();
        return false;
      }, this));
      shape.bind();
    },

    buildTemplate: function(viewModel) {
      var result = "";
      for (var key in viewModel) {
        var input = viewModel[key];
        result += "<div class='form-group'>"
        result += "<label for='" + key +"'>" + input.label + "</label> ";
        result += "<input type='text' id='" + key + "' name='" + key + "' />";
        result += "</div>";
      }
      return result;
    },

    remove: function() {
      this.element.empty();
      this.menu.element.show();
    }
  });
})();
