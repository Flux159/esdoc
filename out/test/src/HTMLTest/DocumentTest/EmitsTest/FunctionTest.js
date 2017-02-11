'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@emits} */
describe('testEmitsFunction', () => {
  const doc = (0, _util.readDoc)('function/index.html');

  describe('in details', () => {
    it('has desc.', () => {
      (0, _util.findParent)(doc, '[id="static-function-testEmitsFunction"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="emitName"] [href$="TestEmitsFunctionEvent.html"]', 'TestEmitsFunctionEvent');
      });
    });
  });
});