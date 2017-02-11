'use strict';

var _util = require('../util.js');

/** @test {AbstractDoc#@_unknown} */
describe('test unknown tag', () => {
  it('has unknown tag.', () => {
    const doc = global.db.find({ name: 'TestUnknownDefinition' })[0];
    _util.assert.equal(doc.unknown.length, 1);
    _util.assert.equal(doc.unknown[0].tagName, '@foobar');
    _util.assert.equal(doc.unknown[0].tagValue, 'this is unknown tag.');
  });
});