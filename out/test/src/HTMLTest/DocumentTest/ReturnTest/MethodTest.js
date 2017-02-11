'use strict';

var _util = require('./../../../util.js');

/** @test {MethodDoc#@return} */
describe('TestReturnMethod', () => {
  const doc = (0, _util.readDoc)('class/src/Return/Method.js~TestReturnMethod.html');

  describe('in summary', () => {
    it('has return', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public method1(): number');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method2"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public method2(): TestClassDefinition');
      });
    });
  });

  describe('in details', () => {
    it('has desc.', () => {
      (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public method1(): number');
        _util.assert.includes(doc, '[data-ice="returnParams"] tbody tr', 'number this is return value.');
      });

      (0, _util.findParent)(doc, '[id="instance-method-method2"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public method2(): TestClassDefinition');
        _util.assert.includes(doc, '[data-ice="returnParams"] tbody tr', 'TestClassDefinition this is return value.');
        _util.assert.includes(doc, '[data-ice="returnParams"] tbody tr a', 'class/src/Class/Definition.js~TestClassDefinition.html', 'href');
      });
    });
  });
});