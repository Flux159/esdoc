'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@throws} */
describe('testThrowsFunction', () => {
  const doc = (0, _util.readDoc)('function/index.html');

  it('has throws.', () => {
    (0, _util.findParent)(doc, '[id="static-function-testThrowsFunction"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="throw"] a[href="class/src/Throws/Function.js~TestThrowsFunctionError.html"]', 'TestThrowsFunctionError');
    });
  });
});