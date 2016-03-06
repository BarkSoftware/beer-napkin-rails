beer.Layering = beer.util.createClass({
  initialize: function(table) {
    this.canvas = table.napkin.canvas;
    this.frontButton = $('#bring-to-front')
    this.frontButton.click(_.bind(this.bringToFront, this));
    this.backButton = $('#send-to-back')
    this.backButton.click(_.bind(this.sendToBack, this));
    this.canvas.on('selection:cleared', _.bind(this.setButtonState, this));
    this.canvas.on('object:selected', _.bind(this.setButtonState, this));
  },

  bringToFront: function() {
    var activeObj = this.canvas.getActiveObject();
    if (activeObj) {
      activeObj.bringToFront();
    }
  },

  sendToBack: function() {
    var activeObj = this.canvas.getActiveObject();
    if (activeObj) {
      activeObj.sendToBack();
    }
  },

  setButtonState: function() {
    var activeObj = this.canvas.getActiveObject();
    if (activeObj) {
      this.frontButton.removeAttr('disabled');
      this.backButton.removeAttr('disabled');
    } else {
      this.frontButton.attr('disabled', 'disabled');
      this.backButton.attr('disabled', 'disabled');
    }
  }
});
