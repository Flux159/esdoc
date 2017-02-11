'use strict';

var _util = require('./../../../util.js');

/** @test {SingleDocBuilder} */
describe('TestAccessVariable:', () => {
  const doc = (0, _util.readDoc)('variable/index.html');

  /** @test {SingleDocBuilder#_buildSingleDoc} */
  describe('in summary: ', () => {
    it('has public accessor.', () => {
      (0, _util.find)(doc, '[data-ice="summary"] [href="variable/index.html#static-variable-testAccessVariablePublic"]', doc => {
        doc = doc.parents('[data-ice="target"]');
        _util.assert.includes(doc, null, 'public testAccessVariablePublic:');
      });
    });

    it('has protected accessor.', () => {
      (0, _util.find)(doc, '[data-ice="summary"] [href="variable/index.html#static-variable-testAccessVariableProtected"]', doc => {
        doc = doc.parents('[data-ice="target"]');
        _util.assert.includes(doc, null, 'protected testAccessVariableProtected:');
      });
    });

    it('has private accessor.', () => {
      (0, _util.find)(doc, '[data-ice="summary"] [href="variable/index.html#static-variable-testAccessVariablePrivate"]', doc => {
        doc = doc.parents('[data-ice="target"]');
        _util.assert.includes(doc, null, 'private testAccessVariablePrivate:');
      });
    });

    it('has auto private accessor.', () => {
      (0, _util.find)(doc, '[data-ice="summary"] [href="variable/index.html#static-variable-_testAccessVariableAutoPrivate"]', doc => {
        doc = doc.parents('[data-ice="target"]');
        _util.assert.includes(doc, null, 'private _testAccessVariableAutoPrivate:');
      });
    });
  });

  /** @test {SingleDocBuilder#_buildSingleDoc} */
  describe('in detail: ', () => {
    it('has public accessor.', () => {
      _util.assert.includes(doc, '[data-ice="detail"] #static-variable-testAccessVariablePublic', 'public testAccessVariablePublic:');
    });

    it('has protected accessor.', () => {
      _util.assert.includes(doc, '[data-ice="detail"] #static-variable-testAccessVariableProtected', 'protected testAccessVariableProtected:');
    });

    it('has private accessor.', () => {
      _util.assert.includes(doc, '[data-ice="detail"] #static-variable-testAccessVariablePrivate', 'private testAccessVariablePrivate:');
    });

    it('has auto private accessor.', () => {
      _util.assert.includes(doc, '[data-ice="detail"] #static-variable-_testAccessVariableAutoPrivate', 'private _testAccessVariableAutoPrivate:');
    });
  });
});