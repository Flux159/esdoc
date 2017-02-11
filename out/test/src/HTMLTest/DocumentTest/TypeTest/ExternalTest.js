'use strict';

var _util = require('./../../../util.js');

/**
 * @test {ParamParser#parseParamValue}
 * @test {ParamParser#parseParam}
 */
describe('TestTypeExternal', () => {
  const doc = (0, _util.readDoc)('class/src/Type/External.js~TestTypeExternal.html');

  it('has external type.', () => {
    (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
      _util.assert.includes(doc, null, 'method1(p1: XMLHttpRequest)');
      _util.assert.includes(doc, 'a[href="https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest"]', 'XMLHttpRequest');
    });
  });
});