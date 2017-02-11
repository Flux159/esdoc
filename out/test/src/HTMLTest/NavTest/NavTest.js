'use strict';

var _util = require('./../../util.js');

/** @test {DocBuilder#_buildNavDoc} */
describe('test navigation:', () => {
  const doc = (0, _util.readDoc)('index.html');

  it('has class', () => {
    (0, _util.findParent)(doc, '[data-ice="nav"] a[href="class/src/Desc/Class.js~TestDescClass.html"]', '[data-ice="doc"]', doc => {
      _util.assert.includes(doc, null, 'TestDescClass');
    });
  });

  it('has interface.', () => {
    (0, _util.findParent)(doc, '[data-ice="nav"] a[href="class/src/Interface/Definition.js~TestInterfaceDefinition.html"]', '[data-ice="doc"]', doc => {
      _util.assert.includes(doc, null, 'TestInterfaceDefinition');
    });
  });

  it('has function.', () => {
    (0, _util.findParent)(doc, '[data-ice="nav"] a[href="function/index.html#static-function-testDescFunction"]', '[data-ice="doc"]', doc => {
      _util.assert.includes(doc, null, 'testDescFunction');
    });
  });

  it('has variable.', () => {
    (0, _util.findParent)(doc, '[data-ice="nav"] a[href="variable/index.html#static-variable-testDescVariable"]', '[data-ice="doc"]', doc => {
      _util.assert.includes(doc, null, 'testDescVariable');
    });
  });

  it('has typedef.', () => {
    (0, _util.findParent)(doc, '[data-ice="nav"] a[href="typedef/index.html#static-typedef-TestTypedefDefinition"]', '[data-ice="doc"]', doc => {
      _util.assert.includes(doc, null, 'TestTypedefDefinition');
    });
  });

  it('has external.', () => {
    (0, _util.findParent)(doc, '[data-ice="nav"] a[href="http://example.com"]', '[data-ice="doc"]', doc => {
      _util.assert.includes(doc, null, 'TestExternalDefinition');
    });
  });
});