(function() {
  var bindBackspace = function(action) {
    // Prevent the backspace key from navigating back.
    $(document).unbind('keydown').bind('keydown', function (event) {
      if (event.keyCode === 8 || event.keyCode === 46) {
        var d = event.srcElement || event.target;
        if ((d.tagName.toUpperCase() === 'INPUT' &&
            (
             d.type.toUpperCase() === 'TEXT' ||
             d.type.toUpperCase() === 'PASSWORD' ||
             d.type.toUpperCase() === 'FILE' ||
             d.type.toUpperCase() === 'SEARCH' ||
             d.type.toUpperCase() === 'EMAIL' ||
             d.type.toUpperCase() === 'NUMBER' ||
             d.type.toUpperCase() === 'DATE' )
            ) ||
          d.tagName.toUpperCase() === 'TEXTAREA') {
          if (d.readOnly || d.disabled) {
            event.preventDefault();
          }
        }
        else {
          event.preventDefault();
          action();
        }
      }
    });
  }
  beer.Napkin = beer.util.createClass({
    initialize: function(table, menu, options) {
      beer.napkin = this;
      this.table = table;
      this.menu = menu;
      this.element = $("<canvas id='beer-napkin'></canvas>");
      table.element.find("#napkin").append(this.element);
      var options = _.merge(beer.options.napkin, options);
      this.canvas = new fabric.Canvas("beer-napkin", {
        width: options.width,
        height: options.height
      });
      this.canvas.setBackgroundImage(beer.options.background, this.canvas.renderAll.bind(this.canvas));
      if (options.json) {
        this.canvas.loadFromDatalessJSON(options.json);
        this.canvas.deactivateAll().renderAll();
      }
      this.canvas.on('selection:cleared', _.bind(function() {
        this.table.bottle.element.empty();
        this.table.menu.element.show();
      }, this));
      var removeActiveAsset = _.bind(this.removeActiveObject, this);
      bindBackspace(removeActiveAsset);
      $('button#remove-active-object').click(removeActiveAsset);
    },

    removeActiveObject: function() {
      var canvas = this.canvas;
      var activeObj = canvas.getActiveObject();
      if (activeObj) {
        canvas.remove(activeObj);
      }
      var activeGroup = canvas.getActiveGroup();
      if (activeGroup) {
        canvas.deactivateAll();
        _.each(activeGroup.objects, function(obj) {
          canvas.remove(obj);
        });
      }
    },
  });
})();
