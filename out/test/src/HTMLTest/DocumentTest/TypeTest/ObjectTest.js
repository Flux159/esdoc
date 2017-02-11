'use strict';

var _util = require('./../../../util.js');

/**
 * @test {ParamParser#parseParamValue}
 * @test {ParamParser#parseParam}
 */
describe('TestTypeObject', () => {
  const doc = (0, _util.readDoc)('class/src/Type/Object.js~TestTypeObject.html');

  it('has object type.', () => {
    (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
      _util.assert.includes(doc, null, 'method1(p1: Object)');
      _util.assert.multiIncludes(doc, '[data-ice="signature"] a', ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object'], 'href');
    });
  });

  it('has object property.', () => {
    (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '.params [data-ice="property"]:nth-child(1)', 'p1 Object this is object p1.');
      _util.assert.includes(doc, '.params [data-ice="property"]:nth-child(2)', 'p1.x1 number this is number x1.');
    });
  });
});