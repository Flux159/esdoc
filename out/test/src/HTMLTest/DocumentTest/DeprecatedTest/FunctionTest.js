'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@deprecated} */
describe('testDeprecatedFunction:', () => {
  const doc = (0, _util.readDoc)('function/index.html');

  describe('in summary', () => {
    it('has deprecated message.', () => {
      (0, _util.find)(doc, '[data-ice="summary"] [href="function/index.html#static-function-testDeprecatedFunction"]', doc => {
        doc = doc.parents('[data-ice="target"]');
        _util.assert.includes(doc, '[data-ice="deprecated"]', 'this function was deprecated.');
      });
    });
  });

  describe('in details', () => {
    it('has deprecated message of member and method.', () => {
      (0, _util.find)(doc, '[id="static-function-testDeprecatedFunction"]', doc => {
        doc = doc.parents('[data-ice="detail"]');
        _util.assert.includes(doc, '[data-ice="deprecated"]', 'this function was deprecated.');
      });
    });
  });
});