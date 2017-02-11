'use strict';

var _util = require('./../../../util.js');

/** @test {DocBuilder} */
describe('TestAbstractDefinition:', () => {
  const doc = (0, _util.readDoc)('class/src/Abstract/Definition.js~TestAbstractDefinition.html');

  /** @test {DocBuilder#_buildSummaryDoc} */
  it('has abstract method in summary.', () => {
    (0, _util.find)(doc, '[data-ice="summary"]', doc => {
      _util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1)', 'public abstract method1() this is abstract method1');
      _util.assert.includes(doc, '[data-ice="target"]:nth-of-type(2)', 'public abstract method2() this is abstract method2');
    });
  });

  /** @test {DocBuilder#_buildDetailDocs} */
  it('has abstract method in detail.', () => {
    _util.assert.includes(doc, '[data-ice="detail"]:nth-of-type(1)', 'public abstract method1()');
    _util.assert.includes(doc, '[data-ice="detail"]:nth-of-type(2)', 'public abstract method2()');
  });
});