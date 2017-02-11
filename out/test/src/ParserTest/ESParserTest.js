'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _ESParser = require('../../../src/Parser/ESParser.js');

var _ESParser2 = _interopRequireDefault(_ESParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {ESParser} */
describe('ESParser', () => {
  it('can parse "do expressions"', () => {
    const ast = _ESParser2.default.parse({ experimentalProposal: { doExpressions: true } }, './test/fixture/syntax/DoExpressions.js');
    (0, _assert2.default)(ast.program.sourceType === 'module');
  });

  it('can parse "function bind"', () => {
    const ast = _ESParser2.default.parse({ experimentalProposal: { functionBind: true } }, './test/fixture/syntax/FunctionBind.js');
    (0, _assert2.default)(ast.program.sourceType === 'module');
  });

  it('can parse "function sent"', () => {
    const ast = _ESParser2.default.parse({ experimentalProposal: { functionSent: true } }, './test/fixture/syntax/FunctionSent.js');
    (0, _assert2.default)(ast.program.sourceType === 'module');
  });

  it('can parse "async generators"', () => {
    const ast = _ESParser2.default.parse({ experimentalProposal: { asyncGenerators: true } }, './test/fixture/syntax/AsyncGenerators.js');
    (0, _assert2.default)(ast.program.sourceType === 'module');
  });

  it('can parse "export extensions"', () => {
    const ast = _ESParser2.default.parse({ experimentalProposal: { exportExtensions: true } }, './test/fixture/syntax/ExportExtensions.js');
    (0, _assert2.default)(ast.program.sourceType === 'module');
  });

  it('can parse "dynamic import"', () => {
    const ast = _ESParser2.default.parse({ experimentalProposal: { dynamicImport: true } }, './test/fixture/syntax/DynamicImport.js');
    (0, _assert2.default)(ast.program.sourceType === 'module');
  });
});