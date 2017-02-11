'use strict';

var _util = require('./../../../util.js');

/**
 * @test {ParamParser#parseParamValue}
 * @test {ParamParser#parseParam}
 */
describe('TestTypeSpread', () => {
  const doc = (0, _util.readDoc)('class/src/Type/Spread.js~TestTypeSpread.html');

  it('has spread type.', () => {
    (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
      _util.assert.includes(doc, null, 'method1(p1: ...number)');
      _util.assert.multiIncludes(doc, '[data-ice="signature"] a', ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number'], 'href');
    });
  });

  it('has object spread type.', () => {
    (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method2"]', '[data-ice="target"]', doc => {
      _util.assert.includes(doc, null, 'method2(config: Object)');
      _util.assert.multiIncludes(doc, '[data-ice="signature"] a', ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object'], 'href');
    });
  });
});