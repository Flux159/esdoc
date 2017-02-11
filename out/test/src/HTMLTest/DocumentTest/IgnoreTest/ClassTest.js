'use strict';

var _util = require('./../../../util.js');

/** @test {DocResolver#_resolveIgnore */
describe('test ignore class', () => {
  describe('TestIgnoreClass1', () => {
    it('is not documented.', () => {
      _util.assert.throws(() => (0, _util.readDoc)('class/src/Ignore/Class.js~TestIgnoreClass1.html'));
    });
  });

  describe('TestIgnoreClass2', () => {
    const doc = (0, _util.readDoc)('class/src/Ignore/Class.js~TestIgnoreClass2.html');

    it('does not have ignored member.', () => {
      _util.assert.throws(() => (0, _util.find)(doc, '[data-ice="summary"] [href$="#instance-member-p1"]', () => {}));
      _util.assert.throws(() => (0, _util.find)(doc, '[id="instance-member-p1"]', () => {}));
    });

    it('does not have ignored method.', () => {
      _util.assert.throws(() => (0, _util.find)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', () => {}));
      _util.assert.throws(() => (0, _util.find)(doc, '[id="instance-method-method1"]', () => {}));
    });
  });
});