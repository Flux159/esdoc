'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@since} */
describe('testSinceVariable', () => {
  const doc = (0, _util.readDoc)('variable/index.html');

  describe('in summary', () => {
    it('has since.', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-variable-testSinceVariable"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
      });
    });
  });

  describe('in detail', () => {
    it('has since.', () => {
      (0, _util.findParent)(doc, '[id="static-variable-testSinceVariable"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="since"]', 'since 1.2.3');
      });
    });
  });
});