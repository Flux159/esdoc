'use strict';

var _util = require('./../../../util.js');

/**
 * @test {AbstractDoc#@_export}
 * @test {ClassDocBuilder@_buildClassDoc}
 */
describe('TestExportNamed', () => {
  it('has named import path.', () => {
    const doc = (0, _util.readDoc)('class/src/Export/Named.js~TestExportNamed.html');
    _util.assert.includes(doc, '.header-notice [data-ice="importPath"]', `import {TestExportNamed} from 'esdoc-test-fixture/src/Export/Named.js'`);
  });
});