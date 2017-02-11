'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@desc} */
describe('testDescVariable', () => {
  const doc = (0, _util.readDoc)('variable/index.html');

  describe('in summary', () => {
    it('has desc', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-variable-testDescVariable"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, '[data-ice="description"]', 'this is testDescVariable.');
      });
    });
  });

  describe('in details', () => {
    it('has desc.', () => {
      (0, _util.findParent)(doc, '[id="static-variable-testDescVariable"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="description"]', 'this is testDescVariable.');
      });
    });
  });
});