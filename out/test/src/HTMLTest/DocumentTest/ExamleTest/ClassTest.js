'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@example} */
describe('TestExampleClass', () => {
  const doc = (0, _util.readDoc)('class/src/Example/Class.js~TestExampleClass.html');

  describe('in self detail', () => {
    it('has example.', () => {
      _util.assert.includes(doc, '.self-detail [data-ice="exampleDoc"]:nth-of-type(1)', 'const foo = 123; console.log(foo);');
      _util.assert.includes(doc, '.self-detail [data-ice="exampleDoc"]:nth-of-type(2)', 'const bar = 123; console.log(bar);');
    });
  });

  describe('in details', () => {
    it('has example.', () => {
      (0, _util.findParent)(doc, '[id="instance-constructor-constructor"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="exampleDoc"]', 'const foo = 123;');
      });

      (0, _util.findParent)(doc, '[id="instance-member-p1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="exampleDoc"]', 'const foo = 123;');
      });

      (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="exampleDoc"]', 'const foo = 123;');
      });
    });
  });
});