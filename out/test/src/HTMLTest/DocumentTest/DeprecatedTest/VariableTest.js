'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@deprecated} */
describe('testDeprecatedVariable:', () => {
  const doc = (0, _util.readDoc)('variable/index.html');

  describe('in summary', () => {
    it('has deprecated message.', () => {
      (0, _util.find)(doc, '[data-ice="summary"] [href="variable/index.html#static-variable-testDeprecatedVariable"]', doc => {
        doc = doc.parents('[data-ice="target"]');
        _util.assert.includes(doc, '[data-ice="deprecated"]', 'this variable was deprecated.');
      });
    });
  });

  describe('in details', () => {
    it('has deprecated message.', () => {
      (0, _util.find)(doc, '[id="static-variable-testDeprecatedVariable"]', doc => {
        doc = doc.parents('[data-ice="detail"]');
        _util.assert.includes(doc, '[data-ice="deprecated"]', 'this variable was deprecated.');
      });
    });
  });
});