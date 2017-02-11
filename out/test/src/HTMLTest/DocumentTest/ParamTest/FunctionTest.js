'use strict';

var _util = require('./../../../util.js');

/** @test {FunctionDoc#@param} */
describe('testParamFunction', () => {
  const doc = (0, _util.readDoc)('function/index.html');

  describe('in summary', () => {
    it('has param.', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-function-testParamFunction"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public testParamFunction(p1: number, p2: TestClassDefinition)');
      });
    });
  });

  describe('in details', () => {
    it('has param.', () => {
      (0, _util.findParent)(doc, '[id="static-function-testParamFunction"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public testParamFunction(p1: number, p2: TestClassDefinition)');
        _util.assert.includes(doc, '.params tbody tr:nth-child(1)', 'p1 number this is p1.');
        _util.assert.includes(doc, '.params tbody tr:nth-child(2)', 'p2 TestClassDefinition this is p2.');
        _util.assert.includes(doc, '.params tbody tr:nth-child(2) a', 'class/src/Class/Definition.js~TestClassDefinition.html', 'href');
      });
    });
  });
});