'use strict';

var _util = require('./../../../util.js');

/**
 * @test {ParamParser#parseParamValue}
 * @test {ParamParser#parseParam}
 */
describe('TestTypeFunction', () => {
  const doc = (0, _util.readDoc)('class/src/Type/Function.js~TestTypeFunction.html');

  it('has function type.', () => {
    (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
      _util.assert.includes(doc, null, 'method1(p1: function(x1: number, x2: string): boolean)');
      _util.assert.multiIncludes(doc, '[data-ice="signature"] a', ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean'], 'href');
    });
  });
});