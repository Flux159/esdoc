'use strict';

var _util = require('../util.js');

/** @test {DocResolver#_resolveUndocumentIdentifier} */
describe('test config.undocumentIdentifier: false', () => {
  (0, _util.cli)('./test/fixture/config/esdoc-undocumentIdentifier.json');

  function readDoc(filePath) {
    return (0, _util.readDoc)(filePath, './test/fixture/dest/esdoc-undocumentIdentifier');
  }

  it('does not have undocument identifier', () => {
    _util.assert.throws(() => {
      readDoc('class/src/Undocument/Definition.js~TestUndocumentDefinition.html');
    });
  });
});