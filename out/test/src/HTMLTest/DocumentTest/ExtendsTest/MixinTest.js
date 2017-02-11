'use strict';

var _util = require('./../../../util.js');

/**
 * @test {ClassDoc#@extends}
 * @test {DocResolver#_resolveNecessary}
 */
describe('TestExtendsMixin', () => {
  const doc = (0, _util.readDoc)('class/src/Extends/Mixin.js~TestExtendsMixin.html');

  it('has expression extends.', () => {
    (0, _util.find)(doc, '.self-detail [data-ice="expressionExtends"]', doc => {
      _util.assert.includes(doc, 'pre code', 'class TestExtendsMixin extends mixin(TestExtendsMixinInner1, TestExtendsMixinInner2)');
    });
  });

  it('has extends chain.', () => {
    (0, _util.find)(doc, '.self-detail [data-ice="mixinExtends"]', doc => {
      _util.assert.includes(doc, null, 'TestExtendsMixinInner1, TestExtendsMixinInner2');
      _util.assert.includes(doc, 'a[href="class/src/Extends/Mixin.js~TestExtendsMixinInner1.html"]', 'TestExtendsMixinInner1');
      _util.assert.includes(doc, 'a[href="class/src/Extends/Mixin.js~TestExtendsMixinInner2.html"]', 'TestExtendsMixinInner2');
    });
  });
});