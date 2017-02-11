'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@see} */
describe('TestSeeClass', () => {
  const doc = (0, _util.readDoc)('class/src/See/Class.js~TestSeeClass.html');

  it('has see from class.', () => {
    (0, _util.find)(doc, '.self-detail [data-ice="see"]', doc => {
      _util.assert.includes(doc, 'a[href="http://foo.example.com"]', 'http://foo.example.com');
      _util.assert.includes(doc, 'a[href="http://bar.example.com"]', 'http://bar.example.com');
    });
  });

  it('has see from constructor.', () => {
    (0, _util.findParent)(doc, '[id="instance-constructor-constructor"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="see"] a[href="http://example.com"]', 'http://example.com');
    });
  });

  it('has see from member.', () => {
    (0, _util.findParent)(doc, '[id="instance-member-p1"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="see"] a[href="http://example.com"]', 'http://example.com');
    });
  });

  it('has see from method.', () => {
    (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="see"] a[href="http://example.com"]', 'http://example.com');
    });
  });
});