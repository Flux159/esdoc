'use strict';

var _util = require('./../../../util.js');

/**
 * @test {ParamParser#parseParamValue}
 * @test {ParamParser#parseParam}
 */
describe('TestTypeTypedef', () => {
  const doc = (0, _util.readDoc)('class/src/Type/Typedef.js~TestTypeTypedef.html');

  it('has typedef type.', () => {
    (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
      _util.assert.includes(doc, null, 'method1(p1: TestTypeTypedefInner)');
      _util.assert.multiIncludes(doc, '[data-ice="signature"] a', ['typedef/index.html#static-typedef-TestTypeTypedefInner'], 'href');
    });
  });
});