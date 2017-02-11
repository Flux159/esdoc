'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@desc} */
describe('TestParamMethod', () => {
  const doc = (0, _util.readDoc)('class/src/Param/Method.js~TestParamMethod.html');

  describe('in summary', () => {
    it('has desc', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public method1(p1: number, p2: TestClassDefinition)');
      });
    });
  });

  describe('in details', () => {
    it('has desc.', () => {
      (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public method1(p1: number, p2: TestClassDefinition)');
        _util.assert.includes(doc, '.params tbody tr:nth-child(1)', 'p1 number this is p1.');
        _util.assert.includes(doc, '.params tbody tr:nth-child(2)', 'p2 TestClassDefinition this is p2.');
        _util.assert.includes(doc, '.params tbody tr:nth-child(2) a', 'class/src/Class/Definition.js~TestClassDefinition.html', 'href');
      });
    });
  });
});