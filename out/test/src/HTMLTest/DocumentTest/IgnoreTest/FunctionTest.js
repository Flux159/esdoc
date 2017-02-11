'use strict';

var _util = require('./../../../util.js');

/** @test {DocResolver#_resolveIgnore */
describe('testIgnoreFunction', () => {
  const doc = (0, _util.readDoc)('function/index.html');

  it('is not documented.', () => {
    _util.assert.throws(() => (0, _util.find)(doc, '[data-ice="summary"] [href$="#static-function-testIgnoreFunction"]', () => {}));
    _util.assert.throws(() => (0, _util.find)(doc, '[id="static-function-testIgnoreFunction"]', () => {}));
  });
});