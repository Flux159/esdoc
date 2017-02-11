'use strict';

var _util = require('./../../../util.js');

/** @test {ClassDoc#@extends} */
describe('TestExtendsProperty', () => {
  const doc = (0, _util.readDoc)('class/src/Extends/Property.js~TestExtendsProperty.html');

  it('has extends chain.', () => {
    (0, _util.find)(doc, '.self-detail [data-ice="extendsChain"]', doc => {
      _util.assert.includes(doc, null, 'TestExtendsPropertyPackage~obj.TestExtendsPropertyInner → TestExtendsProperty');
    });
  });
});