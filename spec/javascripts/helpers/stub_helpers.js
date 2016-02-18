var stubCanvas = function() {
  var stub = {
    on: sinon.spy(),
    add: sinon.spy(),
    loadFromJSON: sinon.spy(),
    loadFromDatalessJSON: sinon.spy(),
    renderAll: sinon.spy(),
    setBackgroundImage: sinon.spy(),
  };
  stub.deactivateAll = sinon.stub().returns(stub);
  return stub;
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
