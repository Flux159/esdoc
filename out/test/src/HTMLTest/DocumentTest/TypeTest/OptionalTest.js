'use strict';

var _util = require('./../../../util.js');

/**
 * @test {ParamParser#parseParamValue}
 * @test {ParamParser#parseParam}
 */
describe('TestTypeOptional', () => {
  const doc = (0, _util.readDoc)('class/src/Type/Optional.js~TestTypeOptional.html');

  it('has optional attribute.', () => {
    (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '.params [data-ice="property"]:nth-child(1)', 'optional');
    });
  });
});