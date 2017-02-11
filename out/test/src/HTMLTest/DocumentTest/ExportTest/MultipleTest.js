'use strict';

var _util = require('./../../../util.js');

/** @test {DocFactory#_inspectExportNamedDeclaration} */
describe('test multiple export', () => {
  it('is documented.', () => {
    const doc1 = (0, _util.readDoc)('class/src/Export/Multiple.js~TestExportMultiple.html');
    _util.assert.includes(doc1, '.header-notice [data-ice="importPath"]', `import {TestExportMultiple} from 'esdoc-test-fixture/src/Export/Multiple.js'`);

    const doc2 = (0, _util.readDoc)('variable/index.html');
    (0, _util.findParent)(doc2, '[id="static-variable-testExportMultiple"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="importPath"]', `import {testExportMultiple} from 'esdoc-test-fixture/src/Export/Multiple.js'`);
    });
  });
});