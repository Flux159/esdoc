'use strict';

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _taffydb = require('taffydb');

var _ESDoc = require('../../src/ESDoc.js');

var _ESDoc2 = _interopRequireDefault(_ESDoc);

var _publish = require('../../src/Publisher/publish.js');

var _publish2 = _interopRequireDefault(_publish);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const configFilePath = './test/fixture/package/esdoc.json';
const configJSON = _fsExtra2.default.readFileSync(configFilePath, { encode: 'utf8' });
const config = JSON.parse(configJSON);

_ESDoc2.default.generate(config, (data, asts, config) => {
  _fsExtra2.default.removeSync(config.destination);

  const db = (0, _taffydb.taffy)(data);
  db.find = function (...cond) {
    return db(...cond).map(v => v);
  };

  global.db = db;

  (0, _publish2.default)(data, asts, config);
});