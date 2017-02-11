'use strict';

var _util = require('../util.js');

/** @test {ESDoc._useBuiltinExternal} */
describe('test config.builtinExternal: false', () => {
  (0, _util.cli)('./test/fixture/config/esdoc-builtinExternal.json');

  function readDoc(filePath) {
    return (0, _util.readDoc)(filePath, './test/fixture/dest/esdoc-builtinExternal');
  }

  it('does not have builtin external link', () => {
    const doc = readDoc('class/src/Type/Array.js~TestTypeArray.html');
    _util.assert.throws(() => {
      _util.assert.includes(doc, 'a[href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"]', 'number');
    });
  });
});