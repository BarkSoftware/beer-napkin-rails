beer.EventListener = beer.util.createClass({
  initialize: function(table) {
    this.undoStack = new beer.UndoStack();
    table.napkin.canvas.on('object:modified', _.bind(this.objectModified, this));
  },
  objectModified: function(event) {
    this.undoStack.push(new beer.Event(event));
  }
});

beer.UndoStack = beer.util.createClass({
  initialize: function() {
    this.events = [];
    $('#undo').click(_.bind(this.pop, this));
  },
  push: function(event) {
    this.events.push(event);
  },
  pop: function() {
    var event = this.events.pop();
    event.undo();
  }
});

beer.Event = beer.util.createClass({
  initialize: function(event) {
    this.event = event;
    this.originalState = _.cloneDeep(event.target.originalState);
    this.target = event.target;
  },
  undo: function() {
    this.target.set(this.originalState);
    beer.napkin.canvas.renderAll();
  }
});
