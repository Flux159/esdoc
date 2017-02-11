'use strict';

var _util = require('./../../../util.js');

/** @test {ClassDoc#@extends} */
describe('TestExtendsExpression', () => {
  const doc = (0, _util.readDoc)('class/src/Extends/Expression.js~TestExtendsExpression.html');

  it('has expression extends.', () => {
    (0, _util.find)(doc, '.self-detail [data-ice="expressionExtends"]', doc => {
      _util.assert.includes(doc, 'pre code', 'class TestExtendsExpression extends TestExtendsExpressionInner(123)');
    });
  });

  it('has extends chain.', () => {
    (0, _util.find)(doc, '.self-detail [data-ice="extendsChain"]', doc => {
      _util.assert.includes(doc, null, 'TestExtendsExpressionInner → TestExtendsExpression');
      _util.assert.includes(doc, 'a[href$="#static-function-TestExtendsExpressionInner"]', 'TestExtendsExpressionInner');
    });
  });
});