'use strict';

var _util = require('./../../../util.js');

/**
 * @test {DocFactory#_inspectExportDefaultDeclaration}
 * @test {DocFactory#_inspectExportNamedDeclaration}
 */
describe('test default export with new expression and indirect.', () => {
  it('has instance description', () => {
    const doc = (0, _util.readDoc)('class/src/Export/NewExpressionIndirect.js~TestExportNewExpressionIndirect.html');

    (0, _util.find)(doc, '[data-ice="instanceDocs"]', doc => {
      _util.assert.includes(doc, null, 'You can directly use an instance of this class. testExportNewExpressionIndirect');
      _util.assert.includes(doc, 'a', 'testExportNewExpressionIndirect');
      _util.assert.includes(doc, 'a', 'variable/index.html#static-variable-testExportNewExpressionIndirect', 'href');
    });

    // does not have import path because the class is not clear exported.
    try {
      _util.assert.includes(doc, '.header-notice [data-ice="importPath"]', 'import');
    } catch (e) {
      return;
    }
    (0, _util.assert)(false);
  });

  it('has class description', () => {
    const doc = (0, _util.readDoc)('variable/index.html');

    (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-variable-testExportNewExpressionIndirect"]', '[data-ice="target"]', doc => {
      _util.assert.includes(doc, null, 'public testExportNewExpressionIndirect: TestExportNewExpressionIndirect');
    });

    (0, _util.findParent)(doc, '#static-variable-testExportNewExpressionIndirect', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, 'h3', 'public testExportNewExpressionIndirect: TestExportNewExpressionIndirect');
      _util.assert.includes(doc, '[data-ice="importPath"]', `import testExportNewExpressionIndirect from 'esdoc-test-fixture/src/Export/NewExpressionIndirect.js'`);
    });
  });
});