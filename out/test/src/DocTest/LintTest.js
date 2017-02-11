'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _LintDocBuilder = require('../../../src/Publisher/Builder/LintDocBuilder.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {LintDocBuilder} */
describe('TestLintInvalid', () => {
  it('has results', () => {
    _assert2.default.equal(_LintDocBuilder._results.length, 4);
    _assert2.default.equal(_LintDocBuilder._results[0].doc.longname, 'src/Lint/Invalid.js~TestLintInvalid#method1');
    _assert2.default.equal(_LintDocBuilder._results[1].doc.longname, 'src/Lint/Invalid.js~TestLintInvalid#method2');
    _assert2.default.equal(_LintDocBuilder._results[2].doc.longname, 'src/Lint/Invalid.js~TestLintInvalid#method3');
    _assert2.default.equal(_LintDocBuilder._results[3].doc.longname, 'src/Lint/Invalid.js~TestLintInvalid#method4');
  });
});