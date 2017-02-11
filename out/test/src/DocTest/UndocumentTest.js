'use strict';

var _util = require('../util.js');

/**
 * @test {DocFactory#_traverseComments}
 * @test {AbstractDoc#@desc}
 * @test {DocResolver#_resolveUndocumentIdentifier}
 */
describe('test undocument', () => {
  it('has undocument tag.', () => {
    const doc = global.db.find({ name: 'TestUndocumentDefinition', undocument: true })[0];
    _util.assert.equal(doc.undocument, true);
  });
});