'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assert = undefined;
exports.cli = cli;
exports.readDoc = readDoc;
exports.find = find;
exports.findParent = findParent;
exports.consoleLogSwitch = consoleLogSwitch;

var _assert2 = require('assert');

var _assert3 = _interopRequireDefault(_assert2);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _ESDocCLI = require('../../src/ESDocCLI.js');

var _ESDocCLI2 = _interopRequireDefault(_ESDocCLI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cli(configPath = null) {
  const cliPath = _path2.default.resolve('./src/cli.js');
  const argv = ['node', cliPath];

  if (configPath) {
    configPath = _path2.default.resolve(configPath);
    argv.push('-c', configPath);
    console.log(`process: ${configPath}`);
  }

  const cli = new _ESDocCLI2.default(argv);
  consoleLogSwitch(false);
  cli.exec();
  consoleLogSwitch(true);
}

function readDoc(fileName, dirName = './test/fixture/dest/esdoc') {
  const html = _fs2.default.readFileSync(`${dirName}/${fileName}`, { encoding: 'utf-8' });
  const $ = _cheerio2.default.load(html);
  return $('html').first();
}

function find($el, selector, callback) {
  const $els = $el.find(selector);
  if (!$els.length) (0, _assert3.default)(false, `node is not found. selector = "${selector}"`);
  if ($els.length !== 1) (0, _assert3.default)(false, `many nodes are found. selector = "${selector}"`);

  callback($els.first());
}

function findParent($el, selector, parentSelector, callback) {
  find($el, selector, $child => {
    const $parents = $child.parents(parentSelector);

    if (!$parents.length) (0, _assert3.default)(false, `parent is not found. selector = "${parentSelector}"`);
    if ($parents.length !== 1) (0, _assert3.default)(false, `many parents are found. selector = "${parentSelector}"`);

    callback($parents.first());
  });
}

function getActual($el, selector, attr) {
  let $target;
  if (selector) {
    const $els = $el.find(selector);
    if (!$els.length) (0, _assert3.default)(false, `node is not found. selector = "${selector}"`);
    if ($els.length !== 1) (0, _assert3.default)(false, `many nodes are found. selector = "${selector}"`);
    $target = $els.first();
  } else {
    $target = $el;
  }

  if (!$target.length) {
    (0, _assert3.default)(false, `node is not found. selector = "${selector}"`);
  }

  let actual;
  if (attr) {
    actual = $target.attr(attr);
  } else {
    actual = $target.text().replace(/\s+/g, ' ');
  }

  if (actual === null) {
    (0, _assert3.default)(false, `actual is null. selector = ${selector}, attr = ${attr}`);
  }

  return actual;
}

_assert3.default.includes = function ($el, selector, expect, attr) {
  const actual = getActual($el, selector, attr);
  (0, _assert3.default)(actual.includes(expect) === true, `selector: "${selector}",\nactual: ${actual}\nexpect: ${expect}`);
};

_assert3.default.multiIncludes = function ($el, selector, expects, attr) {
  const $targets = $el.find(selector);
  if ($targets.length !== expects.length) (0, _assert3.default)(false, `node length and expects length is mismatch. selector = "${selector}"`);

  for (let i = 0; i < $targets.length; i++) {
    const $target = $targets.eq(i);
    let actual;
    if (attr) {
      actual = $target.attr(attr);
    } else {
      actual = $target.text().replace(/\s+/g, ' ');
    }

    if (actual === null) {
      (0, _assert3.default)(false, `actual is null. selector = ${selector}, attr = ${attr}`);
    }

    const expect = expects[i];
    (0, _assert3.default)(actual.includes(expect) === true, `selector: "${selector}",\nactual: ${actual}\nexpect: ${expect}`);
  }
};

_assert3.default.notIncludes = function ($el, selector, expect, attr) {
  const actual = getActual($el, selector, attr);
  (0, _assert3.default)(actual.includes(expect) === false, `selector: "${selector}"`);
};

const assert = exports.assert = _assert3.default;

const consoleLog = console.log;
function consoleLogSwitch(on) {
  if (on) {
    console.log = consoleLog;
  } else {
    console.log = () => {};
  }
}