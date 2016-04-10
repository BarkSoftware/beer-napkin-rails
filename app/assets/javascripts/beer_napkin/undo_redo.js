(function() {
  beer.UndoRedo = beer.util.createClass({
    initialize: function(table) {
      this.canvas = table.napkin.canvas;
      this.redoStack = [];
      this.undoStack = [];
      this.currentVersion = this.canvas.toObject();
      this.buttonState();
      $('#undo').click(_.bind(this.undo, this));
      $('#redo').click(_.bind(this.redo, this));
      this.canvas.on('object:modified', _.bind(this.onChange, this));
      this.canvas.on('object:added', _.bind(this.onChange, this));
      this.canvas.on('object:removed', _.bind(this.onChange, this));
    },
    onChange: function() {
      if (!this.working) {
        this.redoStack = [];
        this.buttonState();
        this.undoStack.push(this.currentVersion);
        this.currentVersion = this.canvas.toObject();
      }
    },
    undo: function() {
      this.popAndPushVersion(this.undoStack, this.redoStack);
    },
    redo: function() {
      this.popAndPushVersion(this.redoStack, this.undoStack);
    },
    popAndPushVersion: function(from, to) {
      this.working = true;
      var version = from.pop();
      if (version) {
        to.push(this.canvas.toObject());
        this.canvas.loadFromJSON(version);
        this.canvas.renderAll();
        this.currentVersion = this.canvas.toObject();
        this.buttonState();
      }
      this.working = false;
    },
    buttonState: function() {
      _.each(['undo', 'redo'], _.bind(function(name) {
        if(this[name + 'Stack'].length === 0) {
          $('#' + name).attr('disabled', 'disabled');
        }
        else {
          $('#' + name).removeAttr('disabled');
        }
      }, this));
    }
  });
})();
