'use strict';

var _util = require('../util.js');

/** @test {publish} */
describe('test config.includeSource: false', () => {
  (0, _util.cli)('./test/fixture/config/esdoc-includeSource.json');

  function readDoc(filePath) {
    return (0, _util.readDoc)(filePath, './test/fixture/dest/esdoc-includeSource');
  }

  it('does not have source code.', () => {
    const doc = readDoc('file/src/Desc/Class.js.html');
    _util.assert.includes(doc, '[data-ice="content"]', 'src/Desc/Class.js');
    _util.assert.includes(doc, '[data-ice="content"]', 'Sorry, this documentation does not provide source code.');
    _util.assert.notIncludes(doc, '[data-ice="content"]', 'class TestDescClass');
  });
});