'use strict';

var _util = require('../util.js');

/** @test {CoverageBuilder} */
describe('test config.coverage: false', () => {
  (0, _util.cli)('./test/fixture/config/esdoc-coverage.json');

  function readDoc(filePath) {
    return (0, _util.readDoc)(filePath, './test/fixture/dest/esdoc-coverage');
  }

  it('does not have coverage', () => {
    const doc = readDoc('source.html');
    _util.assert.throws(() => {
      _util.assert.includes(doc, '[data-ice="coverageBadge"]', './badge.svg', 'src');
    });
  });
});