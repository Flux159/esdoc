'use strict';

var _util = require('../util.js');

/** @test {publish} */
describe('test config.test: null', () => {
  (0, _util.cli)('./test/fixture/config/esdoc-test.json');

  function readDoc(filePath) {
    return (0, _util.readDoc)(filePath, './test/fixture/dest/esdoc-test');
  }

  it('does not have test integration', () => {
    _util.assert.throws(() => {
      readDoc('test.html');
    });
  });
});