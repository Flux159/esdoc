'use strict';

var _util = require('../util.js');

/** @test {DocResolver#_resolveUnexportIdentifier} */
describe('test config.unexportIdentifier: true', () => {
  (0, _util.cli)('./test/fixture/config/esdoc-unexportIdentifier.json');

  function readDoc(filePath) {
    return (0, _util.readDoc)(filePath, './test/fixture/dest/esdoc-unexportIdentifier');
  }

  it('has unexport identifier', () => {
    const doc = readDoc('class/src/Export/Class.js~TestExportClass6.html');
    _util.assert.includes(doc, '.self-detail [data-ice="name"]', 'TestExportClass6');
    _util.assert.notIncludes(doc, '.header-notice', 'import');
  });
});