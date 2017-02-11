'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@since} */
describe('TestSinceClass', () => {
  const doc = (0, _util.readDoc)('class/src/Since/Class.js~TestSinceClass.html');

  it('has since at class.', () => {
    _util.assert.includes(doc, '.header-notice [data-ice="since"]', 'since 1.2.3');
  });

  describe('in summary', () => {
    it('has since at constructor.', () => {
      (0, _util.findParent)(doc, '[href$="#instance-constructor-constructor"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
      });
    });

    it('has since at member.', () => {
      (0, _util.findParent)(doc, '[href$="#instance-member-p1"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
      });
    });

    it('has since at method.', () => {
      (0, _util.findParent)(doc, '[href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
      });
    });
  });

  describe('in detail', () => {
    it('has since at constructor.', () => {
      (0, _util.findParent)(doc, '[id="instance-constructor-constructor"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
      });
    });

    it('has since at member.', () => {
      (0, _util.findParent)(doc, '[id="instance-member-p1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
      });
    });

    it('has since at method.', () => {
      (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
      });
    });
  });
});