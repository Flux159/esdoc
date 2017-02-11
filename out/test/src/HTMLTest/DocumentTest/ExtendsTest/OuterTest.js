'use strict';

var _util = require('./../../../util.js');

/** @test {ClassDoc#@extends} */
describe('TestExtendsOuter', () => {
  const doc = (0, _util.readDoc)('class/src/Extends/Outer.js~TestExtendsOuter.html');

  it('has extends chain.', () => {
    (0, _util.find)(doc, '.self-detail [data-ice="extendsChain"]', doc => {
      _util.assert.includes(doc, null, 'Array → TestExtendsBuiltin → TestExtendsOuter');
      _util.assert.includes(doc, 'a[href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"]', 'Array');
      _util.assert.includes(doc, 'a[href="class/src/Extends/Builtin.js~TestExtendsBuiltin.html"]', 'TestExtendsBuiltin');
    });
  });

  it('has inherited methods and more', () => {
    it('has super class methods and more.', () => {
      (0, _util.findParent)(doc, '[data-ice="inheritedSummary"] a[href$="TestExtendsBuiltin.html"]', '[data-ice="summary"]', doc => {
        _util.assert.includes(doc, 'thead', 'From class TestExtendsBuiltin');
        _util.assert.includes(doc, 'thead a', 'class/src/Extends/Builtin.js~TestExtendsBuiltin.html', 'href');
        _util.assert.includes(doc, 'a[href$="#instance-method-method1"]', 'method1');
      });
    });
  });
});