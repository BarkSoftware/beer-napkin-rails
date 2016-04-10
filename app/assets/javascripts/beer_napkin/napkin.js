(function() {
  beer.Napkin = beer.util.createClass({
    initialize: function(table, _menu, options) {
      beer.napkin = this;
      this.table = table;
      this.element = $("<canvas id='beer-napkin'></canvas>");
      table.element.find("#napkin").append(this.element);
      var options = _.merge(beer.options.napkin, options);
      this.canvas = new fabric.Canvas("beer-napkin", {
        width: beer.options.napkin.width(),
        height: beer.options.napkin.height()
      });
      $(window).resize(_.bind(function() {
        this.canvas.setWidth(beer.options.napkin.width());
        this.canvas.setHeight(beer.options.napkin.height());
        this.canvas.calcOffset();
      }, this));
      this.canvas.setBackgroundColor(beer.options.background, this.canvas.renderAll.bind(this.canvas));
      if (options.json) {
        this.canvas.loadFromDatalessJSON(options.json);
        this.canvas.deactivateAll().renderAll();
      }
      this.canvas.on('selection:cleared', _.bind(function() {
        this.table.bottle.remove();
      }, this));
      var removeActiveObject = _.bind(this.removeActiveObject, this);
      beer.util.bindBackspace(removeActiveObject);
      var duplicateActiveObject = _.bind(this.duplicateActiveObject, this);
      $('button#remove-active-object').click(removeActiveObject);
      $('button#duplicate-object').click(duplicateActiveObject);
    },

    duplicateActiveObject: function() {
      var canvas = this.canvas;
      var activeObj = canvas.getActiveObject();
      var object = fabric.util.object.clone(activeObj);
      object.set('top', object.top + 15);
      object.set('left', object.left + 15);
      canvas.add(object);
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
