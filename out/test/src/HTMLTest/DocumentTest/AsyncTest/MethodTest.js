'use strict';

var _util = require('./../../../util.js');

/** @test {MethodDoc#_$async} */
describe('TestAsyncMethod', () => {
  const doc = (0, _util.readDoc)('class/src/Async/Method.js~TestAsyncMethod.html');

  describe('in summary', () => {
    it('has async mark.', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public async method1()');
      });
    });
  });

  describe('in details', () => {
    it('has async mark.', () => {
      (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public async method1()');
      });
    });
  });
});