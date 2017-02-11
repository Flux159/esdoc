'use strict';

var _util = require('./../../../util.js');

/**
 * @test {ClassDoc#@extends}
 * @test {DocResolver@_resolveNecessary}
 */
describe('TestExtendsInner', () => {
  it('has extends chain.', () => {
    const doc = (0, _util.readDoc)('class/src/Extends/Inner.js~TestExtendsInner.html');
    (0, _util.find)(doc, '.self-detail [data-ice="extendsChain"]', doc => {
      _util.assert.includes(doc, null, '_TestExtendsInner → TestExtendsInner');
      _util.assert.includes(doc, 'a[href$="_TestExtendsInner.html"]', '_TestExtendsInner');
    });
  });

  it('has direct subclass.', () => {
    const doc = (0, _util.readDoc)('class/src/Extends/Inner.js~_TestExtendsInner.html');
    (0, _util.find)(doc, '.self-detail [data-ice="directSubclass"]', doc => {
      _util.assert.includes(doc, 'a[href="class/src/Extends/Inner.js~TestExtendsInner.html"]', 'TestExtendsInner');
    });
  });
});