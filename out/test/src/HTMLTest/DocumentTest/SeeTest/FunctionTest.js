'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@see} */
describe('testSeeFunction', () => {
  const doc = (0, _util.readDoc)('function/index.html');

  it('has see.', () => {
    (0, _util.findParent)(doc, '[id="static-function-testSeeFunction"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="see"] a[href="http://example.com"]', 'http://example.com');
    });
  });
});