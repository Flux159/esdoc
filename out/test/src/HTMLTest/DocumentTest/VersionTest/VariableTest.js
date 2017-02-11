'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@version} */
describe('testVersionVariable', () => {
  const doc = (0, _util.readDoc)('variable/index.html');

  describe('in summary', () => {
    it('has version', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-variable-testVersionVariable"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
      });
    });
  });

  describe('in details', () => {
    it('has desc.', () => {
      (0, _util.findParent)(doc, '[id="static-variable-testVersionVariable"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
      });
    });
  });
});