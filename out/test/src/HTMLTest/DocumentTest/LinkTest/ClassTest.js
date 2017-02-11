'use strict';

var _util = require('./../../../util.js');

/** @test {DocResolver#_resolveLink} */
describe('TestLinkClass', () => {
  const doc = (0, _util.readDoc)('class/src/Link/Class.js~TestLinkClass.html');

  it('has link from class.', () => {
    _util.assert.includes(doc, '.self-detail [data-ice="description"] a[href="function/index.html#static-function-testLinkFunction"]', 'testLinkFunction');
  });

  it('has link from constructor.', () => {
    (0, _util.findParent)(doc, '[id="instance-constructor-constructor"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="description"] a[href="function/index.html#static-function-testLinkFunction"]', 'testLinkFunction');
    });
  });

  it('has link from member.', () => {
    (0, _util.findParent)(doc, '[id="instance-member-p1"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="description"] a[href="function/index.html#static-function-testLinkFunction"]', 'testLinkFunction');
    });
  });

  it('has link from method.', () => {
    (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="description"] a[href="function/index.html#static-function-testLinkFunction"]', 'testLinkFunction');
    });
  });
});