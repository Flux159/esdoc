'use strict';

var _util = require('./../../../util.js');

/** @test {ClassDoc#@extends} */
describe('TestExtendsBuiltin', () => {
  const doc = (0, _util.readDoc)('class/src/Extends/Builtin.js~TestExtendsBuiltin.html');

  it('has extends chain.', () => {
    (0, _util.find)(doc, '.self-detail [data-ice="extendsChain"]', doc => {
      _util.assert.includes(doc, null, 'Array → TestExtendsBuiltin');
      _util.assert.includes(doc, 'a', 'Array');
      _util.assert.includes(doc, 'a', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array', 'href');
    });
  });
});