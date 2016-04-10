(function() {
  beer.util = {
    loadSVG: function(url, done) {
      fabric.loadSVGFromURL(url, function(objects, options) {
        done(objects);
      }, function(item, object) {
        object.set('id', item.getAttribute('id'));
      });
    },

    createClass: fabric.util.createClass,

    bindBackspace: function(action) {
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
  }
})();
