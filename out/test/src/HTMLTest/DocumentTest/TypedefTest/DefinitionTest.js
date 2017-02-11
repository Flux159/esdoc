'use strict';

var _util = require('./../../../util.js');

/** @test {TypedefDoc} */
describe('TestTypedefDefinition', () => {
  const doc = (0, _util.readDoc)('typedef/index.html');

  describe('in summary', () => {
    it('has desc', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-typedef-TestTypedefDefinition"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public TestTypedefDefinition: Object');
      });
    });
  });

  describe('in details', () => {
    it('has desc.', () => {
      (0, _util.findParent)(doc, '[id="static-typedef-TestTypedefDefinition"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public TestTypedefDefinition: Object');
        _util.assert.includes(doc, '.params [data-ice="property"]:nth-child(1)', 'p1 number this is p1.');
      });
    });
  });
});