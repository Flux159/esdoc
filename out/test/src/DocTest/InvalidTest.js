'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _InvalidCodeLogger = require('../../../src/Util/InvalidCodeLogger');

var _InvalidCodeLogger2 = _interopRequireDefault(_InvalidCodeLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {InvalidCodeLogger} */
describe('test invalid code', () => {
  it('has invalid code log.', () => {
    _assert2.default.equal(_InvalidCodeLogger2.default._logs.length, 2);

    (0, _assert2.default)(_InvalidCodeLogger2.default._logs[0].filePath.includes('test/fixture/package/src/Invalid/CodeSyntax.js'));
    _assert2.default.deepEqual(_InvalidCodeLogger2.default._logs[0].log, [1, 2]);

    (0, _assert2.default)(_InvalidCodeLogger2.default._logs[1].filePath.includes('test/fixture/package/src/Invalid/DocSyntax.js'));
    _assert2.default.deepEqual(_InvalidCodeLogger2.default._logs[1].log, [1, 4]);
  });
});