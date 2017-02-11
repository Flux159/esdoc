'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@desc} */
describe('TestDescMultiLine:', () => {
  const doc = (0, _util.readDoc)('class/src/Desc/MultiLine.js~TestDescMultiLine.html');

  describe('in summary', () => {
    it('has first sentence desc', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, '[data-ice="description"]', 'this is method1.');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method2"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, '[data-ice="description"]', 'this is method2.');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method3"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, '[data-ice="description"]', 'this is method3.');
      });
    });
  });

  describe('in details:', () => {
    it('has all sentence desc.', () => {
      (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="description"]', 'this is method1. this is second line.');
      });

      (0, _util.findParent)(doc, '[id="instance-method-method2"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="description"]', 'this is method2. this is second sentence.');
      });

      (0, _util.findParent)(doc, '[id="instance-method-method3"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="description"]', 'this is method3. this is second sentence.');
      });
    });
  });
});