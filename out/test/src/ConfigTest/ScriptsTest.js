'use strict';

var _util = require('../util.js');

/** @test {DocBuilder#_buildLayoutDoc} */
describe('test config.scripts: ["./test/fixture/script/custom.js"]', () => {
  (0, _util.cli)('./test/fixture/config/esdoc-scripts.json');

  function readDoc(filePath) {
    return (0, _util.readDoc)(filePath, './test/fixture/dest/esdoc-scripts');
  }

  it('has custom script', () => {
    const doc = readDoc('index.html');
    _util.assert.includes(doc, '[data-ice="userScript"]', 'user/script/0-custom.js', 'src');
  });
});