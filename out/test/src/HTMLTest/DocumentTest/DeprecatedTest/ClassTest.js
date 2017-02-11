'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@deprecated} */
describe('TestDeprecatedClass:', () => {
  const doc = (0, _util.readDoc)('class/src/Deprecated/Class.js~TestDeprecatedClass.html');

  describe('in self detail:', () => {
    it('has deprecated message of self.', () => {
      _util.assert.includes(doc, '.self-detail [data-ice="deprecated"]', 'this class was deprecated. this is deprecated.');
    });
  });

  describe('in summary:', () => {
    it('has deprecated message of member and method.', () => {
      (0, _util.find)(doc, '[data-ice="summary"] [href="class/src/Deprecated/Class.js~TestDeprecatedClass.html#instance-member-p1"]', doc => {
        doc = doc.parents('[data-ice="target"]');
        _util.assert.includes(doc, '[data-ice="deprecated"]', 'this member was deprecated.');
      });

      (0, _util.find)(doc, '[data-ice="summary"] [href="class/src/Deprecated/Class.js~TestDeprecatedClass.html#instance-method-method1"]', doc => {
        doc = doc.parents('[data-ice="target"]');
        _util.assert.includes(doc, '[data-ice="deprecated"]', 'this method was deprecated.');
      });
    });
  });

  describe('in details:', () => {
    it('has deprecated message of member and method.', () => {
      (0, _util.find)(doc, '[id="instance-member-p1"]', doc => {
        doc = doc.parents('[data-ice="detail"]');
        _util.assert.includes(doc, '[data-ice="deprecated"]', 'this member was deprecated.');
      });

      (0, _util.find)(doc, '[id="instance-method-method1"]', doc => {
        doc = doc.parents('[data-ice="detail"]');
        _util.assert.includes(doc, '[data-ice="deprecated"]', 'this method was deprecated.');
      });
    });
  });
});