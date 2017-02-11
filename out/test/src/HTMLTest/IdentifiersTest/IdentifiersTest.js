'use strict';

var _util = require('./../../util.js');

/** @test {IdentifiersDocBuilder} */
describe('test identifiers', () => {
  const doc = (0, _util.readDoc)('identifiers.html');

  it('has class summary.', () => {
    (0, _util.findParent)(doc, '[data-ice="classSummary"] a[href="class/src/Desc/Class.js~TestDescClass.html"]', '[data-ice="target"]', doc => {
      _util.assert.includes(doc, null, 'public TestDescClass this is TestDescClass.');
    });
  });

  it('has interface summary.', () => {
    (0, _util.findParent)(doc, '[data-ice="interfaceSummary"] a[href="class/src/Interface/Definition.js~TestInterfaceDefinition.html"]', '[data-ice="target"]', doc => {
      _util.assert.includes(doc, null, 'public TestInterfaceDefinition this is TestInterfaceDefinition');
    });
  });

  it('has function summary.', () => {
    (0, _util.findParent)(doc, '[data-ice="functionSummary"] a[href="function/index.html#static-function-testDescFunction"]', '[data-ice="target"]', doc => {
      _util.assert.includes(doc, null, 'public testDescFunction() this is testDescFunction.');
    });
  });

  it('has variable summary.', () => {
    (0, _util.findParent)(doc, '[data-ice="variableSummary"] a[href="variable/index.html#static-variable-testDescVariable"]', '[data-ice="target"]', doc => {
      _util.assert.includes(doc, null, 'public testDescVariable: number this is testDescVariable.');
    });
  });

  it('has typedef summary.', () => {
    (0, _util.findParent)(doc, '[data-ice="typedefSummary"] a[href="typedef/index.html#static-typedef-TestTypedefDefinition"]', '[data-ice="target"]', doc => {
      _util.assert.includes(doc, null, 'public TestTypedefDefinition: Object this is TestTypedefDefinition.');
    });
  });

  it('has external summary.', () => {
    (0, _util.findParent)(doc, '[data-ice="externalSummary"] a[href="http://example.com"]', '[data-ice="target"]', doc => {
      _util.assert.includes(doc, null, 'public TestExternalDefinition');
    });
  });
});