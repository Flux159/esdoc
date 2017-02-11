'use strict';

var _util = require('./../../../util.js');

/** @test {DocResolver#_resolveDuplication} */
describe('TestDuplicationDefinition', () => {
  const doc = (0, _util.readDoc)('class/src/Duplication/Definition.js~TestDuplicationDefinition.html');

  describe('in summary', () => {
    it('has setter/getter/method.', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-set-value"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public set value: number');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-get-value"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public get value: number');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-onClick"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public onClick(p: number)');
      });
    });
  });

  describe('in details', () => {
    it('has setter/getter/method.', () => {
      (0, _util.findParent)(doc, '[id="instance-set-value"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, null, 'public set value: number');
      });

      (0, _util.findParent)(doc, '[id="instance-get-value"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, null, 'public get value: number');
      });

      (0, _util.findParent)(doc, '[id="instance-method-onClick"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, null, 'public onClick(p: number)');
      });
    });
  });
});