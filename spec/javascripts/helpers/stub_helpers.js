var stubCanvas = function() {
  return {
    on: sinon.spy(),
    add: sinon.spy(),
    loadFromJSON: sinon.spy(),
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
