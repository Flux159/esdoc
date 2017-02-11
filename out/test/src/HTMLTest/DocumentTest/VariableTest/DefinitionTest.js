'use strict';

var _util = require('./../../../util.js');

/** @test {VariableDoc} */
describe('testVariableDefinition', () => {
  const doc = (0, _util.readDoc)('variable/index.html');

  describe('in summary', () => {
    it('has desc', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-variable-testVariableDefinition"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public testVariableDefinition: number');
      });
    });
  });

  describe('in details', () => {
    it('has desc.', () => {
      (0, _util.findParent)(doc, '[id="static-variable-testVariableDefinition"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public testVariableDefinition: number');
      });
    });
  });
});