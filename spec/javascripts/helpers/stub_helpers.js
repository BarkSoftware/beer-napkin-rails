var stub_options = {
  assets: [
    { type: 'Button', collection: 'wireframe' },
  ]
};

var stub_canvas = function() {
  return {
    on: sinon.spy(),
    add: sinon.spy(),
  };
};

var stub_asset = function() {
  return {
    deselect: sinon.spy(),
    select: sinon.spy(),
    shape: stub_shape,
  };
};

var stub_shape = function() {
  return {
    setLeft: sinon.spy(),
    setTop: sinon.spy(),
  }
}
