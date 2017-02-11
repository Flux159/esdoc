'use strict';

var _util = require('./../../../util.js');

/**
 * @test {ClassDoc#@extends}
 * @test {ClassDocBuilder#_buildInheritedSummaryHTML}
 */
describe('test deep extends', () => {
  describe('TestExtendsDeepSquare', () => {
    const doc = (0, _util.readDoc)('class/src/Extends/Deep.js~TestExtendsDeepSquare.html');

    it('has extends chain.', () => {
      (0, _util.find)(doc, '.self-detail [data-ice="extendsChain"]', doc => {
        _util.assert.includes(doc, null, 'TestExtendsDeepShape → TestExtendsDeepRectangle → TestExtendsDeepSquare');
        _util.assert.includes(doc, 'a[href$="Array"]', 'Array');
        _util.assert.includes(doc, 'a[href="class/src/Extends/Deep.js~TestExtendsDeepShape.html"]', 'TestExtendsDeepShape');
        _util.assert.includes(doc, 'a[href="class/src/Extends/Deep.js~TestExtendsDeepRectangle.html"]', 'TestExtendsDeepRectangle');
      });
    });

    it('has super^1 class methods and more.', () => {
      (0, _util.findParent)(doc, '[data-ice="inheritedSummary"] a[href$="TestExtendsDeepRectangle.html"]', '[data-ice="summary"]', doc => {
        _util.assert.includes(doc, 'thead', 'From class TestExtendsDeepRectangle');
        _util.assert.includes(doc, 'thead a', 'class/src/Extends/Deep.js~TestExtendsDeepRectangle.html', 'href');

        _util.assert.includes(doc, 'a[href$="#static-get-staticValueRectangle"]', 'staticValueRectangle');
        _util.assert.includes(doc, 'a[href$="#static-set-staticValueRectangle"]', 'staticValueRectangle');
        _util.assert.includes(doc, 'a[href$="#static-member-staticPRectangle"]', 'staticPRectangle');
        _util.assert.includes(doc, 'a[href$="#static-method-staticMethodRectangle"]', 'staticMethodRectangle');

        _util.assert.includes(doc, 'a[href$="#instance-get-valueRectangle"]', 'valueRectangle');
        _util.assert.includes(doc, 'a[href$="#instance-set-valueRectangle"]', 'valueRectangle');
        _util.assert.includes(doc, 'a[href$="#instance-member-pRectangle"]', 'pRectangle');
        _util.assert.includes(doc, 'a[href$="#instance-method-methodRectangle"]', 'methodRectangle');
      });
    });

    it('has super^2 class methods and more.', () => {
      (0, _util.findParent)(doc, '[data-ice="inheritedSummary"] a[href$="TestExtendsDeepShape.html"]', '[data-ice="summary"]', doc => {
        _util.assert.includes(doc, 'thead', 'From class TestExtendsDeepShape');
        _util.assert.includes(doc, 'thead a', 'class/src/Extends/Deep.js~TestExtendsDeepShape.html', 'href');

        _util.assert.includes(doc, 'a[href$="#static-get-staticValueShape"]', 'staticValueShape');
        _util.assert.includes(doc, 'a[href$="#static-set-staticValueShape"]', 'staticValueShape');
        _util.assert.includes(doc, 'a[href$="#static-member-staticPShape"]', 'staticPShape');
        _util.assert.includes(doc, 'a[href$="#static-method-staticMethodShape"]', 'staticMethodShape');

        _util.assert.includes(doc, 'a[href$="#instance-get-valueShape"]', 'valueShape');
        _util.assert.includes(doc, 'a[href$="#instance-set-valueShape"]', 'valueShape');
        _util.assert.includes(doc, 'a[href$="#instance-member-pShape"]', 'pShape');
        _util.assert.includes(doc, 'a[href$="#instance-method-methodShape"]', 'methodShape');
      });
    });
  });

  describe('TestExtendsDeepRectangle', () => {
    const doc = (0, _util.readDoc)('class/src/Extends/Deep.js~TestExtendsDeepRectangle.html');

    it('has direct subclass.', () => {
      (0, _util.find)(doc, '.self-detail [data-ice="directSubclass"]', doc => {
        _util.assert.includes(doc, 'a[href="class/src/Extends/Deep.js~TestExtendsDeepSquare.html"]', 'TestExtendsDeepSquare');
      });
    });
  });

  describe('TestExtendsDeepShape', () => {
    const doc = (0, _util.readDoc)('class/src/Extends/Deep.js~TestExtendsDeepShape.html');

    it('has direct subclass.', () => {
      (0, _util.find)(doc, '.self-detail [data-ice="directSubclass"]', doc => {
        _util.assert.includes(doc, 'a[href="class/src/Extends/Deep.js~TestExtendsDeepRectangle.html"]', 'TestExtendsDeepRectangle');
      });
    });

    it('has indirect subclass.', () => {
      (0, _util.find)(doc, '.self-detail [data-ice="indirectSubclass"]', doc => {
        _util.assert.includes(doc, 'a[href="class/src/Extends/Deep.js~TestExtendsDeepSquare.html"]', 'TestExtendsDeepSquare');
      });
    });
  });
});