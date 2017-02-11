'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@param} */
describe('TestDestructuringObject', () => {
  const doc = (0, _util.readDoc)('class/src/Destructuring/Object.js~TestDestructuringObject.html');

  describe('in summary', () => {
    it('has object destructuring', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'method1(p: Object)');
      });
    });
  });

  describe('in details', () => {
    it('has object destructuring.', () => {
      (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'method1(p: Object)');
        _util.assert.includes(doc, 'table.params', 'p Object this is object p.');
        _util.assert.includes(doc, 'table.params', 'p.p1 number this is property p1 of p.');
        _util.assert.includes(doc, 'table.params', 'p.p2 string this is property p2 of p.');
      });
    });
  });
});