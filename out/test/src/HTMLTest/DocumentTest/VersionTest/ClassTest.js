'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@version} */
describe('TestVersionClass', () => {
  const doc = (0, _util.readDoc)('class/src/Version/Class.js~TestVersionClass.html');

  describe('in self detail', () => {
    it('has version.', () => {
      _util.assert.includes(doc, '.header-notice [data-ice="version"]', '1.2.3');
    });
  });

  describe('in summary', () => {
    it('has version', () => {
      _util.assert.includes(doc, '[data-ice="constructorSummary"] [data-ice="version"]', '1.2.3');

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-member-p1"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
      });
    });
  });

  describe('in details', () => {
    it('has version', () => {
      (0, _util.findParent)(doc, '[id="instance-constructor-constructor"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
      });

      (0, _util.findParent)(doc, '[id="instance-member-p1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
      });

      (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
      });
    });
  });
});