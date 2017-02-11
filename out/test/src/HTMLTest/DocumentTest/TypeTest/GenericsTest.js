'use strict';

var _util = require('./../../../util.js');

/**
 * @test {ParamParser#parseParamValue}
 * @test {ParamParser#parseParam}
 */
describe('TestTypeGenerics', () => {
  const doc = (0, _util.readDoc)('class/src/Type/Generics.js~TestTypeGenerics.html');

  it('has generics type.', () => {
    (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
      _util.assert.includes(doc, null, 'method1(p1: Array<number>, p2: Map<number, string>, p3: Promise<number[], Error>)');
      _util.assert.multiIncludes(doc, '[data-ice="signature"] a', ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error'], 'href');
    });
  });
});