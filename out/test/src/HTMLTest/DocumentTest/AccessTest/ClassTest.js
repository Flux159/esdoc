'use strict';

var _util = require('./../../../util.js');

/** @test {ClassDocBuilder} */
describe('TestAccessClass:', () => {
  describe('in header:', () => {
    /** @test {ClassDocBuilder#_buildClassDoc} */
    it('has public accessor.', () => {
      const doc = (0, _util.readDoc)('class/src/Access/Class.js~TestAccessClassPublic.html');
      _util.assert.includes(doc, '.header-notice [data-ice="access"]', 'public');
    });

    /** @test {ClassDocBuilder#_buildClassDoc} */
    it('has protected accessor.', () => {
      const doc = (0, _util.readDoc)('class/src/Access/Class.js~TestAccessClassProtected.html');
      _util.assert.includes(doc, '.header-notice [data-ice="access"]', 'protected');
    });

    /** @test {ClassDocBuilder#_buildClassDoc} */
    it('has private accessor.', () => {
      const doc = (0, _util.readDoc)('class/src/Access/Class.js~TestAccessClassPrivate.html');
      _util.assert.includes(doc, '.header-notice [data-ice="access"]', 'private');
    });

    /** @test {ClassDocBuilder#_buildClassDoc} */
    it('has auto private accessor.', () => {
      const doc = (0, _util.readDoc)('class/src/Access/Class.js~_TestAccessClassAutoPrivate.html');
      _util.assert.includes(doc, '.header-notice [data-ice="access"]', 'private');
    });
  });
});