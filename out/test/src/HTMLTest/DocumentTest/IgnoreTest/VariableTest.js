'use strict';

var _util = require('./../../../util.js');

/** @test {DocResolver#_resolveIgnore */
describe('testIgnoreVariable', () => {
  const doc = (0, _util.readDoc)('variable/index.html');

  it('is not documented.', () => {
    _util.assert.throws(() => (0, _util.find)(doc, '[data-ice="summary"] [href$="#static-variable-testIgnoreVariable"]', () => {}));
    _util.assert.throws(() => (0, _util.find)(doc, '[id="static-variable-testIgnoreVariable"]', () => {}));
  });
});