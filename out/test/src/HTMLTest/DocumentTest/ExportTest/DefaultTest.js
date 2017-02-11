'use strict';

var _util = require('./../../../util.js');

/**
 * @test {AbstractDoc#@_export}
 * @test {ClassDocBuilder@_buildClassDoc}
 */
describe('TestExportDefault', () => {
  const doc = (0, _util.readDoc)('class/src/Export/Default.js~TestExportDefault.html');
  it('has default import path.', () => {
    _util.assert.includes(doc, '.header-notice [data-ice="importPath"]', `import TestExportDefault from 'esdoc-test-fixture/src/Export/Default.js'`);
  });
});