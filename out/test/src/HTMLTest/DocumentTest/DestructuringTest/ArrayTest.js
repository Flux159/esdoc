'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@param} */
describe('TestDestructuringArray', () => {
  const doc = (0, _util.readDoc)('class/src/Destructuring/Array.js~TestDestructuringArray.html');

  describe('in summary', () => {
    it('has array destructuring', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'method1(p: number[])');
      });
    });
  });

  describe('in details', () => {
    it('has array destructuring.', () => {
      (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'method1(p: number[])');
        _util.assert.includes(doc, 'table.params', 'p number[] this is p.');
        _util.assert.includes(doc, 'table.params', 'p[0] number this is first of p.');
        _util.assert.includes(doc, 'table.params', 'p[1] number this is second of p.');
      });
    });
  });
});