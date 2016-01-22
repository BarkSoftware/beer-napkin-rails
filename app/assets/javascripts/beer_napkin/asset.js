(function(){
  beer.Asset = beer.util.createClass({
    initialize: function(options, assets) {
      this.assets = assets || beer.assets; // would like to avoid reaching for this?
      this.title = options.title;
      this.name = options.name;
      this.order = options.order;
      this.Shape = options.Shape;
      this.active = options.active;
      this.svgUrl = options.svgUrl;
    },

    element: function() {
      if (this._el) {
        return this._el;
      }
      else {
        var image = $("<img src='" + this.svgUrl + "' />");
        var el = $("<div class='asset'><h5>" + this.title + "</h5></div>");
        el.prepend(image);
        el.click(_.bind(this.activate, this));
        this._el = el;
        return el;
      }
    },

    activate: function() {
      _.each(this.assets, function(a) { a.deactivate(); });
      this.active = true;
      this.element().css('background-color', '#ccc');
    },

    deactivate: function() {
      this.active = false;
      this.element().css('background-color', '#fff');
    },

    createShape: function(bottle, napkin, done) {
      var constructor = _.bind(function(objects) {
        done(new this.Shape(objects, bottle, napkin));
      }, this);
      beer.util.loadSVG(this.svgUrl, constructor);
    },
  });
})();
