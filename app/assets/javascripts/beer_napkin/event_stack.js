beer.ObjectShadows = beer.util.createClass({
  initialize: function() {
    beer.napkin.canvas.on('object:added', _.bind(this._shadow, this));
    this.shadows = [];
  },
  _shadow: function(event) {
    this.shadow(event.target);
  },
  shadow: function(obj) {
    var shadowState = null;
    var shadow = _.find(this.shadows, function(shadow) {
      return shadow.target === obj;
    });
    if (shadow) {
      shadowState = shadow.state;
      shadow.state = obj.toObject();
    }
    else {
      shadowState = null;
      this.shadows.push({
        target: obj,
        state: obj.toObject()
      });
    }
    return shadowState;
  }
});

beer.EventListener = beer.util.createClass({
  initialize: function(table) {
    this.objectShadows = new beer.ObjectShadows();
    this.undoStack = new beer.UndoStack();
    table.napkin.canvas.on('object:modified', _.bind(this.objectModified, this));
  },
  objectModified: function(event) {
    var shadow = this.objectShadows.shadow(event.target);
    this.undoStack.push(new beer.Event(event.target, shadow, this.undoStack));
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
  initialize: function(target, shadow, stack) {
    this.shadow = shadow;
    this.target = target;
    this.stack = stack;
  },
  undo: function() {
    var target = this.target;
    var eventsForOldTarget = _.filter(this.stack.events, function(e) {
      return e.target === target;
    });
    beer.napkin.canvas.remove(target);

    fabric.util.enlivenObjects([this.shadow], function(objects) {
      _.each(objects, function(obj) {
        _.each(eventsForOldTarget, function(e) {
          e.target = obj;
        });
        beer.napkin.canvas.add(obj);
      });
    });
    beer.napkin.canvas.renderAll();
  }
});
