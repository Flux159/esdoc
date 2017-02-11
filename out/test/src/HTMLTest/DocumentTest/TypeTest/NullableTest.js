'use strict';

var _util = require('./../../../util.js');

/**
 * @test {ParamParser#parseParamValue}
 * @test {ParamParser#parseParam}
 */
describe('TestTypeNullable', () => {
  const doc = (0, _util.readDoc)('class/src/Type/Nullable.js~TypeTestNullable.html');

  it('has nullable value.', () => {
    (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '.params [data-ice="property"]:nth-child(1)', 'nullable: true');
      _util.assert.includes(doc, '.params [data-ice="property"]:nth-child(2)', 'nullable: false');
    });
  });
});