'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _util = require('../util.js');

var _ESDocCLI = require('../../../src/ESDocCLI.js');

var _ESDocCLI2 = _interopRequireDefault(_ESDocCLI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @test {ESDocCLI#exec}
 * @test {ESDocCLI#_createConfigFromJSONFile}
 */
describe('test cli', () => {
  const cliPath = _path2.default.resolve('./src/cli.js');
  const configPath = _path2.default.resolve('./test/fixture/config/esdoc-cli.json');

  it('can execute with config file.', () => {
    const argv = ['node', cliPath, '-c', configPath];
    const cli = new _ESDocCLI2.default(argv);

    (0, _util.consoleLogSwitch)(false);
    cli.exec();
    (0, _util.consoleLogSwitch)(true);
  });

  it('can show help', () => {
    const argv = ['node', cliPath, '-c', configPath];
    const cli = new _ESDocCLI2.default(argv);

    (0, _util.consoleLogSwitch)(false);
    cli._showHelp();
    (0, _util.consoleLogSwitch)(true);
  });

  it('can show version', () => {
    const argv = ['node', cliPath, '-c', configPath];
    const cli = new _ESDocCLI2.default(argv);

    (0, _util.consoleLogSwitch)(false);
    cli._showVersion();
    (0, _util.consoleLogSwitch)(true);
  });
});