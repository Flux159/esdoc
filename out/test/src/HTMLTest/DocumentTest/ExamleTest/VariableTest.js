'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@example} */
describe('testDescVariable', () => {
  const doc = (0, _util.readDoc)('variable/index.html');

  describe('in details', () => {
    it('has desc.', () => {
      (0, _util.findParent)(doc, '[id="static-variable-testExampleVariable"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="exampleDoc"]', 'const foo = 123;');
      });
    });
  });
});