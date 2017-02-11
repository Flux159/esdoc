'use strict';

var _util = require('./../../../util.js');

/** @test {DocResolver#_resolveLink} */
describe('testLinkVariable', () => {
  const doc = (0, _util.readDoc)('variable/index.html');

  it('has link.', () => {
    (0, _util.findParent)(doc, '[id="static-variable-testLinkVariable"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="description"] a[href="class/src/Link/Class.js~TestLinkClass.html"]', 'TestLinkClass');
    });
  });
});