'use strict';

var _util = require('./../../../util.js');

/**
 * @test {ParamParser#parseParamValue}
 * @test {ParamParser#parseParam}
 */
describe('TestTypeRecord', () => {
  const doc = (0, _util.readDoc)('class/src/Type/Record.js~TestTypeRecord.html');

  it('has record type.', () => {
    (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
      _util.assert.includes(doc, null, 'method1(p1: {x1: number, x2: string})');
      _util.assert.multiIncludes(doc, '[data-ice="signature"] a', ['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'], 'href');
    });
  });
});