'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@see} */
describe('testSeeVariable', () => {
  const doc = (0, _util.readDoc)('variable/index.html');

  it('has see.', () => {
    (0, _util.findParent)(doc, '[id="static-variable-testSeeVariable"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="see"] a[href="http://example.com"]', 'http://example.com');
    });
  });
});