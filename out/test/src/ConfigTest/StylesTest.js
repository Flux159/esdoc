'use strict';

var _util = require('../util.js');

/** @test {DocBuilder#_buildLayoutDoc} */
describe('test config.styles: ["./test/fixture/style/custom.css"]', () => {
  (0, _util.cli)('./test/fixture/config/esdoc-styles.json');

  function readDoc(filePath) {
    return (0, _util.readDoc)(filePath, './test/fixture/dest/esdoc-styles');
  }

  it('has custom style', () => {
    const doc = readDoc('index.html');
    _util.assert.includes(doc, '[data-ice="userStyle"]', 'user/css/0-custom.css', 'href');
  });
});