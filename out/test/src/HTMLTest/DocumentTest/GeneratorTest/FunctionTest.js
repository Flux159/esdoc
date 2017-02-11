'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@_generator} */
describe('testGeneratorFunction', () => {
  const doc = (0, _util.readDoc)('function/index.html');

  describe('in summary', () => {
    it('has generator mark', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-function-testGeneratorFunction"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public * testGeneratorFunction()');
      });
    });
  });

  describe('in details', () => {
    it('has generator mark.', () => {
      (0, _util.findParent)(doc, '[id="static-function-testGeneratorFunction"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public * testGeneratorFunction()');
      });
    });
  });
});