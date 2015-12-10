(function() {
  beer.Napkin = beer.util.createClass({
    initialize: function(table) {
      this.table = table;
      this.element = $("<canvas id='beer-napkin'></canvas>");
      table.element.find("#napkin").append(this.element);
      var options = beer.options.napkin;
      this.canvas = new fabric.Canvas("beer-napkin", {
        width: options.width,
        height: options.height
      });
    }
  });
})();
