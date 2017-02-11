'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@throws} */
describe('TestThrowsMethod', () => {
  const doc = (0, _util.readDoc)('class/src/Throws/Method.js~TestThrowsMethod.html');

  it('has throws.', () => {
    (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, 'tr[data-ice="throw"]:nth-child(1)', 'TestThrowsMethodError1 throw error if foo.');
      _util.assert.includes(doc, 'tr[data-ice="throw"]:nth-child(1) a', 'class/src/Throws/Method.js~TestThrowsMethodError1.html', 'href');

      _util.assert.includes(doc, 'tr[data-ice="throw"]:nth-child(2)', 'TestThrowsMethodError2 throw error if bar.');
      _util.assert.includes(doc, 'tr[data-ice="throw"]:nth-child(2) a', 'class/src/Throws/Method.js~TestThrowsMethodError2.html', 'href');
    });
  });
});