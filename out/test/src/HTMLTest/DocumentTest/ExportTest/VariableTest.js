'use strict';

var _util = require('./../../../util.js');

/** @test {VariableDoc#@_name} */
describe('test export variable', () => {
  const doc = (0, _util.readDoc)('variable/index.html');

  it('has default import path with direct variable definition.', () => {
    (0, _util.findParent)(doc, '[id="static-variable-testExportVariable1"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="importPath"]', `import testExportVariable1 from 'esdoc-test-fixture/src/Export/Variable.js'`);
    });
  });

  it('has named import path with direct variable definition.', () => {
    (0, _util.findParent)(doc, '[id="static-variable-testExportVariable2"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="importPath"]', `import {testExportVariable2} from 'esdoc-test-fixture/src/Export/Variable.js'`);
    });
  });

  it('is not documented with direct variable definition', () => {
    try {
      (0, _util.findParent)(doc, '[id="static-variable-testExportVariable3"]', '[data-ice="detail"]', () => {});
    } catch (e) {
      return;
    }
    (0, _util.assert)(false);
  });

  it('has named import path with none doc comment', () => {
    (0, _util.findParent)(doc, '[id="static-variable-testExportVariable4"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="importPath"]', `import {testExportVariable4} from 'esdoc-test-fixture/src/Export/Variable.js'`);
    });

    (0, _util.findParent)(doc, '[id="static-variable-testExportVariable5"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="importPath"]', `import {testExportVariable5} from 'esdoc-test-fixture/src/Export/Variable.js'`);
    });
  });

  it('has named import path with indirect variable definition.', () => {
    (0, _util.findParent)(doc, '[id="static-variable-testExportVariable6"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="importPath"]', `import {testExportVariable6} from 'esdoc-test-fixture/src/Export/Variable.js'`);
    });
  });

  it('has named import path with unknown type.', () => {
    (0, _util.findParent)(doc, '[id="static-variable-testExportVariable7"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="importPath"]', `import {testExportVariable7} from 'esdoc-test-fixture/src/Export/Variable.js'`);
    });
  });
});