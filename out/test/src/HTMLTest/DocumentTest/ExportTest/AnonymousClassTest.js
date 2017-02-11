'use strict';

var _util = require('./../../../util.js');

/** @test {ClassDoc#@_name} */
describe('TestExportAnonymousClass', () => {
  const doc = (0, _util.readDoc)('class/src/Export/AnonymousClass.js~AnonymousClass.html');

  describe('in self detail', () => {
    it('is named with anonymous.', () => {
      _util.assert.includes(doc, '[data-ice="importPath"]', `import AnonymousClass from 'esdoc-test-fixture/src/Export/AnonymousClass.js'`);
      _util.assert.includes(doc, '.self-detail [data-ice="name"]', 'AnonymousClass');
    });
  });
});