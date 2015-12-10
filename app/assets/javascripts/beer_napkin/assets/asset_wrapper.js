(function() {
  beer.AssetWrapper = beer.util.createClass(fabric.Group, {
    initialize: function(asset) {
      this.assetBox = new fabric.Rect({
        fill: 'transparent',
        selectable: false,
        height: 100,
        width: 200,
      });
      asset.scaleToWidth(200);
      this.callSuper('initialize', [this.assetBox, asset], {
        selectable: true,
        hoverCursor: 'pointer',
        lockMovementX: true,
        lockMovementY: true,
        hoverCursor: 'pointer',
        hasControls: false,
      });
      this.on('selected', this.selectAsset);
    },
    assetBox: null,
    assetSelected: false,
    deselectAsset: function() {
      this.assetBox.setFill('transparent');
    },
    selectAsset: function() {
      this.assetBox.setFill('#ccc');
    }
  });
})();
