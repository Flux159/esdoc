'use strict';

var _util = require('../util.js');

/** @test {ESDoc.generate} */
describe('test config.excludes: ["Class\\.js"]', () => {
  (0, _util.cli)('./test/fixture/config/esdoc-excludes.json');

  function readDoc(filePath) {
    return (0, _util.readDoc)(filePath, './test/fixture/dest/esdoc-excludes');
  }

  it('does not have excluded identifier', () => {
    _util.assert.throws(() => {
      readDoc('class/src/Desc/Class.js~TestDescClass.html');
    });
  });
});