'use strict';

var _util = require('../util.js');

var _LintDocBuilder = require('../../../src/Publisher/Builder/LintDocBuilder.js');

/** @test {publish} */
describe('test config.lint: false', () => {
  const invalidCount = _LintDocBuilder._results.length;
  (0, _util.cli)('./test/fixture/config/esdoc-lint.json');

  it('does not lint results when invalid code is exits', () => {
    _util.assert.equal(_LintDocBuilder._results.length, invalidCount);
  });
});