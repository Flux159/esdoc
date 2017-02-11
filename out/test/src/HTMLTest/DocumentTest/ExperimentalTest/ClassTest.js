'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@experimental} */
describe('TestExperimentalClass', () => {
  const doc = (0, _util.readDoc)('class/src/Experimental/Class.js~TestExperimentalClass.html');

  describe('in self detail', () => {
    it('has desc.', () => {
      _util.assert.includes(doc, '.self-detail [data-ice="experimental"]', 'this class is experimental. this is experimental');
    });
  });

  describe('in summary', () => {
    it('has desc', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-member-p1"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, '[data-ice="experimental"]', 'this member is experimental.');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, '[data-ice="experimental"]', 'this method is experimental.');
      });
    });
  });

  describe('in details', () => {
    it('has desc.', () => {
      (0, _util.findParent)(doc, '[id="instance-member-p1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="experimental"]', 'this member is experimental.');
      });

      (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="experimental"]', 'this method is experimental.');
      });
    });
  });
});