var stub_canvas = function() {
  return {
    on: sinon.spy(),
    add: sinon.spy(),
  };
};

var stub_asset = function() {
  return {
    deactivate: sinon.spy(),
    activate: sinon.spy(),
    createShape: sinon.spy(),
  };
};

var stub_shape = function() {
  return {
    setLeft: sinon.spy(),
    setTop: sinon.spy(),
  }
}
