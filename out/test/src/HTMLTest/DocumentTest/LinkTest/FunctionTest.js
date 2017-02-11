'use strict';

var _util = require('./../../../util.js');

/** @test {DocResolver#_resolveLink} */
describe('testLinkFunction', () => {
  const doc = (0, _util.readDoc)('function/index.html');

  it('has link.', () => {
    (0, _util.findParent)(doc, '[id="static-function-testLinkFunction"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="description"] a[href="class/src/Link/Class.js~TestLinkClass.html"]', 'TestLinkClass');
      _util.assert.includes(doc, '[data-ice="description"] a[href="class/src/Link/Class.js~TestLinkClass.html#instance-member-p1"]', 'TestLinkClass#p1');
      _util.assert.includes(doc, '[data-ice="description"] a[href="class/src/Link/Class.js~TestLinkClass.html#instance-method-method1"]', 'TestLinkClass#method1');
    });
  });
});