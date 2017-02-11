'use strict';

var _process = require('process');

var _process2 = _interopRequireDefault(_process);

var _util = require('../util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('test finding config path:', () => {
  const cwd = _process2.default.cwd();

  _process2.default.chdir('./test/fixture/config/find-.esdoc.json/');
  (0, _util.cli)();
  _process2.default.chdir(cwd);

  _process2.default.chdir('./test/fixture/config/find-.esdoc.js/');
  (0, _util.cli)();
  _process2.default.chdir(cwd);

  _process2.default.chdir('./test/fixture/config/find-package.json/');
  (0, _util.cli)();
  _process2.default.chdir(cwd);

  it('can find .esdoc.json', () => {
    const doc = (0, _util.readDoc)('class/src/Access/Class.js~TestAccessClassPublic.html', './test/fixture/dest/find-.esdoc.json');
    _util.assert.includes(doc, '.self-detail [data-ice="name"]', 'TestAccessClassPublic');
  });

  it('can find .esdoc.js', () => {
    const doc = (0, _util.readDoc)('class/src/Access/Class.js~TestAccessClassPublic.html', './test/fixture/dest/find-.esdoc.js');
    _util.assert.includes(doc, '.self-detail [data-ice="name"]', 'TestAccessClassPublic');
  });

  it('can find package.js', () => {
    const doc = (0, _util.readDoc)('class/src/Access/Class.js~TestAccessClassPublic.html', './test/fixture/dest/find-package.json');
    _util.assert.includes(doc, '.self-detail [data-ice="name"]', 'TestAccessClassPublic');
  });
});