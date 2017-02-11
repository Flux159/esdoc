'use strict';

var _util = require('./../../../util.js');

/** @test {VariableDoc#@_name} */
describe('test export variable indirect default', () => {
  const doc = (0, _util.readDoc)('variable/index.html');

  it('has default import path with indirect variable definition.', () => {
    (0, _util.findParent)(doc, '[id="static-variable-testExportVariableIndirectDefault"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="importPath"]', `import testExportVariableIndirectDefault from 'esdoc-test-fixture/src/Export/VariableIndirectDefault.js'`);
    });
  });
});