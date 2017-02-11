'use strict';

var _util = require('./../../../util.js');

/** @test {FunctionDoc#@_name} */
describe('test export function indirect default', () => {
  const doc = (0, _util.readDoc)('function/index.html');
  it('has default import path with indirect function definition', () => {
    (0, _util.findParent)(doc, '[id="static-function-testExportFunctionIndirectDefault"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="importPath"]', `import testExportFunctionIndirectDefault from 'esdoc-test-fixture/src/Export/FunctionIndirectDefault.js'`);
    });
  });
});