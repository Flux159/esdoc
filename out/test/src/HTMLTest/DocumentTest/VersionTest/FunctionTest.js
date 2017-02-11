'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@version} */
describe('testVersionFunction', () => {
  const doc = (0, _util.readDoc)('function/index.html');

  describe('in summary', () => {
    it('has version', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-function-testVersionFunction"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
      });
    });
  });

  describe('in details', () => {
    it('has version.', () => {
      (0, _util.findParent)(doc, '[id="static-function-testVersionFunction"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="version"]', '1.2.3');
      });
    });
  });
});