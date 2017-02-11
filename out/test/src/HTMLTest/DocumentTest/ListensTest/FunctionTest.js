'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@listens} */
describe('testListensFunction', () => {
  const doc = (0, _util.readDoc)('function/index.html');

  it('has listens.', () => {
    (0, _util.findParent)(doc, '[id="static-function-testListensFunction"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="listen"] a[href="class/src/Listens/Function.js~TestListensFunctionEvent.html"]', 'TestListensFunctionEvent');
    });
  });
});