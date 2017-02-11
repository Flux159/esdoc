'use strict';

var _util = require('./../../../util.js');

/** @test {ESParser} */
describe('TestExponentiationOperatorDefinition', () => {
  const doc = (0, _util.readDoc)('class/src/ExponentiationOperator/Definition.js~TestExponentiationOperatorDefinition.html');

  describe('in self detail', () => {
    it('has desc.', () => {
      _util.assert.includes(doc, '.self-detail [data-ice="description"]', 'this is TestExponentiationOperatorDefinition.');
    });
  });

  describe('in summary', () => {
    it('has desc', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, '[data-ice="description"]', 'this is method1.');
      });
    });
  });

  describe('in details', () => {
    it('has desc.', () => {
      (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="description"]', 'this is method1.');
      });
    });
  });
});