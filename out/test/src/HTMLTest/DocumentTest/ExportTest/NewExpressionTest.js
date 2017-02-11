'use strict';

var _util = require('./../../../util.js');

/**
 * @test {DocFactory#_inspectExportDefaultDeclaration}
 * @test {DocFactory#_inspectExportNamedDeclaration}
 */
describe('test default export with new expression.', () => {
  describe('default export', () => {
    it('has instance description', () => {
      const doc = (0, _util.readDoc)('class/src/Export/NewExpression.js~TestExportNewExpression.html');

      (0, _util.find)(doc, '[data-ice="instanceDocs"]', doc => {
        _util.assert.includes(doc, null, 'You can directly use an instance of this class. testExportNewExpression');
        _util.assert.includes(doc, 'a', 'testExportNewExpression');
        _util.assert.includes(doc, 'a', 'variable/index.html#static-variable-testExportNewExpression', 'href');
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

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-variable-testExportNewExpression"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public testExportNewExpression: TestExportNewExpression');
      });

      (0, _util.findParent)(doc, '#static-variable-testExportNewExpression', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public testExportNewExpression: TestExportNewExpression');
        _util.assert.includes(doc, '[data-ice="importPath"]', `import testExportNewExpression from 'esdoc-test-fixture/src/Export/NewExpression.js'`);
      });
    });
  });

  describe('named export', () => {
    it('has instance description', () => {
      const doc = (0, _util.readDoc)('class/src/Export/NewExpression.js~TestExportNewExpression2.html');

      (0, _util.find)(doc, '[data-ice="instanceDocs"]', doc => {
        _util.assert.includes(doc, null, 'You can directly use an instance of this class. testExportNewExpression2');
        _util.assert.includes(doc, 'a', 'testExportNewExpression2');
        _util.assert.includes(doc, 'a', 'variable/index.html#static-variable-testExportNewExpression2', 'href');
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

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-variable-testExportNewExpression2"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public testExportNewExpression2: TestExportNewExpression2');
      });

      (0, _util.findParent)(doc, '#static-variable-testExportNewExpression2', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public testExportNewExpression2: TestExportNewExpression2');
        _util.assert.includes(doc, '[data-ice="importPath"]', `import {testExportNewExpression2} from 'esdoc-test-fixture/src/Export/NewExpression.js'`);
      });
    });
  });
});