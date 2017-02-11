'use strict';

var _util = require('./../../../util.js');

/** @test {SingleDocBuilder} */
describe('TestAccessFunction:', () => {
  const doc = (0, _util.readDoc)('function/index.html');

  describe('in summary: ', () => {
    /** @test {SingleDocBuilder#_buildSingleDoc} */
    it('has public accessor.', () => {
      (0, _util.find)(doc, '[data-ice="summary"] [href="function/index.html#static-function-testAccessFunctionPublic"]', doc => {
        doc = doc.parents('[data-ice="target"]');
        _util.assert.includes(doc, null, 'public testAccessFunctionPublic()');
      });
    });

    /** @test {SingleDocBuilder#_buildSingleDoc} */
    it('has protected accessor.', () => {
      (0, _util.find)(doc, '[data-ice="summary"] [href="function/index.html#static-function-testAccessFunctionProtected"]', doc => {
        doc = doc.parents('[data-ice="target"]');
        _util.assert.includes(doc, null, 'protected testAccessFunctionProtected()');
      });
    });

    /** @test {SingleDocBuilder#_buildSingleDoc} */
    it('has private accessor.', () => {
      (0, _util.find)(doc, '[data-ice="summary"] [href="function/index.html#static-function-testAccessFunctionPrivate"]', doc => {
        doc = doc.parents('[data-ice="target"]');
        _util.assert.includes(doc, null, 'private testAccessFunctionPrivate()');
      });
    });

    /** @test {SingleDocBuilder#_buildSingleDoc} */
    it('has auto private accessor.', () => {
      (0, _util.find)(doc, '[data-ice="summary"] [href="function/index.html#static-function-_testAccessFunctionAutoPrivate"]', doc => {
        doc = doc.parents('[data-ice="target"]');
        _util.assert.includes(doc, null, 'private _testAccessFunctionAutoPrivate()');
      });
    });
  });

  describe('in detail: ', () => {
    /** @test {SingleDocBuilder#_buildSingleDoc} */
    it('has public accessor.', () => {
      _util.assert.includes(doc, '[data-ice="detail"] #static-function-testAccessFunctionPublic', 'public testAccessFunctionPublic()');
    });

    /** @test {SingleDocBuilder#_buildSingleDoc} */
    it('has protected accessor.', () => {
      _util.assert.includes(doc, '[data-ice="detail"] #static-function-testAccessFunctionProtected', 'protected testAccessFunctionProtected()');
    });

    /** @test {SingleDocBuilder#_buildSingleDoc} */
    it('has private accessor.', () => {
      _util.assert.includes(doc, '[data-ice="detail"] #static-function-testAccessFunctionPrivate', 'private testAccessFunctionPrivate()');
    });

    /** @test {SingleDocBuilder#_buildSingleDoc} */
    it('has auto private accessor.', () => {
      _util.assert.includes(doc, '[data-ice="detail"] #static-function-_testAccessFunctionAutoPrivate', 'private _testAccessFunctionAutoPrivate()');
    });
  });
});