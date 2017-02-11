'use strict';

var _util = require('./../../../util.js');

/** @test {DocBuilder} */
describe('TestAbstractOverrideDefinition:', () => {
  const doc = (0, _util.readDoc)('class/src/Abstract/Override.js~TestAbstractOverride.html');

  /** @test {DocBuilder#_buildOverrideMethod} */
  it('has override description in summary.', () => {
    (0, _util.find)(doc, '[data-ice="detail"]:nth-of-type(1)', doc => {
      _util.assert.includes(doc, '[data-ice="override"] a', 'TestAbstractDefinition#method1');
      _util.assert.includes(doc, '[data-ice="override"] a', 'class/src/Abstract/Definition.js~TestAbstractDefinition.html#instance-method-method1', 'href');
    });

    (0, _util.find)(doc, '[data-ice="detail"]:nth-of-type(2)', doc => {
      _util.assert.includes(doc, '[data-ice="override"] a', 'TestAbstractDefinition#method2');
      _util.assert.includes(doc, '[data-ice="override"] a', 'class/src/Abstract/Definition.js~TestAbstractDefinition.html#instance-method-method2', 'href');
    });
  });
});