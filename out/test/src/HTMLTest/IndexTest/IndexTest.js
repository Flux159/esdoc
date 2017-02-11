'use strict';

var _util = require('./../../util.js');

/** @test {IndexDocBuilder} */
describe('test index', () => {
  const doc = (0, _util.readDoc)('index.html');

  it('has README.md', () => {
    _util.assert.includes(doc, '[data-ice="index"]', 'this is ESDoc Test Fixture README.');
  });
});