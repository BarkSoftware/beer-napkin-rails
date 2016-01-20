(function() {
  beer.AssetWrapper = beer.util.createClass(fabric.Group, {
    initialize: function(asset, table) {
      this.table = table;
      this.asset = asset;
      this.assetBox = new fabric.Rect({
        fill: 'transparent',
        selectable: false,
        height: 100,
        width: 200,
        hasControls: false,
      });
      asset.scaleToWidth(200);
      this.callSuper('initialize', [this.assetBox, asset], {
        selectable: false,
        lockMovementX: true,
        lockMovementY: true,
        hasControls: false,
      });

      this.on('mouseup', this.select);
    },

    assetBox: null,

    active: false,

    deselect: function() {
      this.assetBox.setFill('transparent');
      this.active = false;
      this.refresh();
    },

    select: function() {
      this.assetBox.setFill('#ccc');
      this.active = true;
      this.refresh();
    },

    addShape: function(done) {
      this.asset.addShape(done);
    },

    refresh: function() {
      this.table.menu.canvas.renderAll();
    }
  });
})();
