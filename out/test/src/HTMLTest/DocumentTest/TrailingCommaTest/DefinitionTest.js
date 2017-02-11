'use strict';

var _util = require('./../../../util.js');

/** @test {ESParser} */
describe('TestTrailingCommaDefinition', () => {
  const doc = (0, _util.readDoc)('class/src/TrailingComma/Definition.js~TestTrailingCommaDefinition.html');

  describe('in self detail', () => {
    it('has desc.', () => {
      _util.assert.includes(doc, '.self-detail [data-ice="description"]', 'this is TestTrailingCommaDefinition.');
    });
  });

  describe('in summary', () => {
    it('has desc', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public method1(p1: number, p2: string)');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method2"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public method2()');
      });
    });
  });

  describe('in details', () => {
    it('has desc.', () => {
      (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '.params [data-ice="property"]:nth-of-type(1)', 'p1 number this is p1.');
        _util.assert.includes(doc, '.params [data-ice="property"]:nth-of-type(2)', 'p2 string this is p2.');
      });

      (0, _util.findParent)(doc, '[id="instance-method-method2"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="description"]', 'this is method2.');
      });
    });
  });
});