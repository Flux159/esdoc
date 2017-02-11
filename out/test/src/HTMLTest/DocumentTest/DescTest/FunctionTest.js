'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@desc} */
describe('testDescFunction', () => {
  const doc = (0, _util.readDoc)('function/index.html');

  describe('in summary', () => {
    it('has desc', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-function-testDescFunction"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, '[data-ice="description"]', 'this is testDescFunction.');
      });
    });
  });

  describe('in details', () => {
    it('has desc.', () => {
      (0, _util.findParent)(doc, '[id="static-function-testDescFunction"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="description"]', 'this is testDescFunction.');
      });
    });
  });
});