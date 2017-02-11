'use strict';

var _util = require('./../../../util.js');

/**
 * @test {ParamParser#parseParamValue}
 * @test {ParamParser#parseParam}
 */
describe('TestTypeClass', () => {
  const doc = (0, _util.readDoc)('class/src/Type/Class.js~TestTypeClass.html');

  it('has class type.', () => {
    (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
      _util.assert.includes(doc, null, 'method1(p1: TestTypeClassInner)');
      _util.assert.includes(doc, 'a[href="class/src/Type/Class.js~TestTypeClassInner.html"]', 'TestTypeClassInner');
    });
  });
});