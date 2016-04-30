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
      $("#bottle").show();
      var form = $("<form></form");
      form.append(this.buildTemplate(shape.viewModel()));
      form.append("<div class='form-group'><button type='submit' class='btn btn-sm'>Ok</button></div>");
      this.element.append(form);
      form.submit(_.bind(function() {
        shape.canvas.deactivateAll().renderAll();
        this.remove();
        return false;
      }, this));
      shape.bind();
    },

    appendInput: function(key, input) {
      var result = "";
      if (input.type === 'text') {
        result += "<label for='" + key +"'>" + input.label + "</label> ";
        result += "<input type='text' id='" + key + "' name='" + key + "' />";
      }
      else if (input.type === 'checkbox') {
        result += "<div class='checkbox'>";
        result += "<label>";
        result += "<input type='checkbox' name='" + key + "' value='" + input.value + "'/>";
        result += input.label;
        result += "</label>";
        result += "</div>";
      }
      else if (input.type === 'radio') {
        result += "<div class='radio'>";
        result += "<label>";
        result += "<input type='radio' name='" + key + "' value='" + input.value + "'/>";
        result += input.label;
        result += "</label>";
        result += "</div>";
      }
      else if (input.type === 'html') {
        result += input.html;
      }
      else if (input.type === 'textarea') {
        result += "<label for='" + key +"'>" + input.label + "</label> ";
        result += "<textarea id='" + key + "' name='" + key + "' class='form-control'></textarea>";
      }
      else if (input.type === 'h5') {
        result += "<h5>" + input.label + "</h5>";
      }
      return result;
    },
    buildTemplate: function(viewModel) {
      var result = "";
      for (var key in viewModel) {
        result += "<div class='form-group'>"
        var input = viewModel[key];
        if (Array.isArray(input)) {
          for (var i = 0; i < input.length; i++) {
            result += this.appendInput(key, input[i]);
          }
        }
        else {
          result += this.appendInput(key, input);
        }
        result += "</div>";
      }
      return result;
    },

    remove: function() {
      this.table.napkin.canvas.trigger('object:modified');
      this.element.empty();
      $("#bottle").hide();
      this.menu.element.show();
    }
  });
})();
