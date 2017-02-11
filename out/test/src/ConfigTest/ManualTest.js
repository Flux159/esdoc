'use strict';

var _util = require('../util.js');

/** @test {ManualDocBuilder} */
describe('test config.manual: null', () => {
  (0, _util.cli)('./test/fixture/config/esdoc-manual.json');

  function readDoc(filePath) {
    return (0, _util.readDoc)(filePath, './test/fixture/dest/esdoc-manual');
  }

  it('does not have manual.', () => {
    _util.assert.throws(() => {
      readDoc('manual/index.html');
    });
  });
});