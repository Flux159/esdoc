'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@experimental} */
describe('testExperimentalVariable', () => {
  const doc = (0, _util.readDoc)('variable/index.html');

  describe('in summary', () => {
    it('has desc', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-variable-testExperimentalVariable"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, '[data-ice="experimental"]', 'this variable is experimental.');
      });
    });
  });

  describe('in details', () => {
    it('has desc.', () => {
      (0, _util.findParent)(doc, '[id="static-variable-testExperimentalVariable"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="experimental"]', 'this variable is experimental.');
      });
    });
  });
});