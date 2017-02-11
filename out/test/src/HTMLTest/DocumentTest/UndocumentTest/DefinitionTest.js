'use strict';

var _util = require('./../../../util.js');

/**
 * @test {DocFactory#_traverseComments}
 * @test {AbstractDoc#@desc}
 * @test {DocResolver#_resolveUndocumentIdentifier}
 */
describe('TestUndocumentDefinition', () => {
  const doc = (0, _util.readDoc)('class/src/Undocument/Definition.js~TestUndocumentDefinition.html');

  it('is exist', () => {
    _util.assert.includes(doc, '.self-detail [data-ice="name"]', 'TestUndocumentDefinition');
  });
});