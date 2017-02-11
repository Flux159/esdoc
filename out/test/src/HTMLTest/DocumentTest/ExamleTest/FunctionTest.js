'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@example} */
describe('testExampleFunction', () => {
  const doc = (0, _util.readDoc)('function/index.html');

  describe('in details', () => {
    it('has desc.', () => {
      (0, _util.findParent)(doc, '[id="static-function-testExampleFunction"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="exampleDoc"]', 'const foo = 123;');
      });
    });
  });
});