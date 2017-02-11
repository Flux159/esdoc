'use strict';

var _util = require('./../../../util.js');

/** @test {VariableDoc} */
describe('testVariableObjectPattern', () => {
  const doc = (0, _util.readDoc)('variable/index.html');

  describe('in summary', () => {
    it('has desc', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-variable-testVariableObjectPattern1"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public testVariableObjectPattern1: number');
      });
    });
  });

  describe('in details', () => {
    it('has desc.', () => {
      (0, _util.findParent)(doc, '[id="static-variable-testVariableObjectPattern1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public testVariableObjectPattern1: number');
      });
    });
  });
});