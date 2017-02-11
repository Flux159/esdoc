'use strict';

var _util = require('./../../../util.js');

/** @test {FunctionDoc#@_name} */
describe('testExportAnonymousFunction', () => {
  const doc = (0, _util.readDoc)('function/index.html');

  describe('in summary', () => {
    it('has desc', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-function-AnonymousFunction"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public AnonymousFunction()');
      });
    });
  });

  describe('in details', () => {
    it('has desc.', () => {
      (0, _util.findParent)(doc, '[id="static-function-AnonymousFunction"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public AnonymousFunction()');
        _util.assert.includes(doc, '[data-ice="importPath"]', `import AnonymousFunction from 'esdoc-test-fixture/src/Export/AnonymousFunction.js'`);
      });
    });
  });
});