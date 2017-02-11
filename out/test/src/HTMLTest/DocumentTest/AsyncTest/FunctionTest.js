'use strict';

var _util = require('./../../../util.js');

/** @test {FunctionDoc#_$async} */
describe('testAsyncFunction', () => {
  const doc = (0, _util.readDoc)('function/index.html');

  describe('in summary', () => {
    it('has async mark', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-function-testAsyncFunction"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public async testAsyncFunction()');
      });
    });
  });

  describe('in details', () => {
    it('has async mark.', () => {
      (0, _util.findParent)(doc, '[id="static-function-testAsyncFunction"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public async testAsyncFunction()');
      });
    });
  });
});