'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@experimental} */
describe('testExperimentalFunction', () => {
  const doc = (0, _util.readDoc)('function/index.html');

  describe('in summary', () => {
    it('has desc', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-function-testExperimentalFunction"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, '[data-ice="experimental"]', 'this function is experimental.');
      });
    });
  });

  describe('in details', () => {
    it('has desc.', () => {
      (0, _util.findParent)(doc, '[id="static-function-testExperimentalFunction"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="experimental"]', 'this function is experimental.');
      });
    });
  });
});