'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _colorLogger = require('color-logger');

var _colorLogger2 = _interopRequireDefault(_colorLogger);

var _ASTUtil = require('./Util/ASTUtil.js');

var _ASTUtil2 = _interopRequireDefault(_ASTUtil);

var _ESParser = require('./Parser/ESParser');

var _ESParser2 = _interopRequireDefault(_ESParser);

var _PathResolver = require('./Util/PathResolver.js');

var _PathResolver2 = _interopRequireDefault(_PathResolver);

var _DocFactory = require('./Factory/DocFactory.js');

var _DocFactory2 = _interopRequireDefault(_DocFactory);

var _TestDocFactory = require('./Factory/TestDocFactory.js');

var _TestDocFactory2 = _interopRequireDefault(_TestDocFactory);

var _InvalidCodeLogger = require('./Util/InvalidCodeLogger.js');

var _InvalidCodeLogger2 = _interopRequireDefault(_InvalidCodeLogger);

var _Plugin = require('./Plugin/Plugin.js');

var _Plugin2 = _interopRequireDefault(_Plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logger = new _colorLogger2.default('ESDoc');

/**
 * API Documentation Generator.
 *
 * @example
 * let config = {source: './src', destination: './esdoc'};
 * ESDoc.generate(config, (results, config)=>{
 *   console.log(results);
 * });
 */
class ESDoc {
  /**
   * Generate documentation.
   * @param {ESDocConfig} config - config for generation.
   * @param {function(results: Object[], asts: Object[], config: ESDocConfig)} publisher - callback for output html.
   */
  static generate(config, publisher) {
    (0, _assert2.default)(typeof publisher === 'function');
    (0, _assert2.default)(config.source);
    (0, _assert2.default)(config.destination);

    _Plugin2.default.init(config.plugins);
    _Plugin2.default.onStart();
    config = _Plugin2.default.onHandleConfig(config);

    this._setDefaultConfig(config);
    this._deprecatedConfig(config);

    _colorLogger2.default.debug = !!config.debug;
    const includes = config.includes.map(v => new RegExp(v));
    const excludes = config.excludes.map(v => new RegExp(v));

    let packageName = null;
    let mainFilePath = null;
    if (config.package) {
      try {
        const packageJSON = _fs2.default.readFileSync(config.package, { encode: 'utf8' });
        const packageConfig = JSON.parse(packageJSON);
        packageName = packageConfig.name;
        mainFilePath = packageConfig.main;
      } catch (e) {
        // ignore
      }
    }

    let results = [];
    const asts = [];
    const sourceDirPath = _path2.default.resolve(config.source);

    this._walk(config.source, filePath => {
      const relativeFilePath = _path2.default.relative(sourceDirPath, filePath);
      let match = false;
      for (const reg of includes) {
        if (relativeFilePath.match(reg)) {
          match = true;
          break;
        }
      }
      if (!match) return;

      for (const reg of excludes) {
        if (relativeFilePath.match(reg)) return;
      }

      console.log(`parse: ${filePath}`);
      const temp = this._traverse(config, config.source, filePath, packageName, mainFilePath);
      if (!temp) return;
      results.push(...temp.results);

      asts.push({ filePath: `source${_path2.default.sep}${relativeFilePath}`, ast: temp.ast });
    });

    if (config.builtinExternal) {
      this._useBuiltinExternal(config, results);
    }

    if (config.test) {
      this._generateForTest(config, results, asts);
    }

    results = _Plugin2.default.onHandleTag(results);

    try {
      publisher(results, asts, config);
    } catch (e) {
      _InvalidCodeLogger2.default.showError(e);
      process.exit(1);
    }

    _Plugin2.default.onComplete();
  }

  /**
   * Generate document from test code.
   * @param {ESDocConfig} config - config for generating.
   * @param {DocObject[]} results - push DocObject to this.
   * @param {AST[]} asts - push ast to this.
   * @private
   */
  static _generateForTest(config, results, asts) {
    const includes = config.test.includes.map(v => new RegExp(v));
    const excludes = config.test.excludes.map(v => new RegExp(v));
    const sourceDirPath = _path2.default.resolve(config.test.source);

    this._walk(config.test.source, filePath => {
      const relativeFilePath = _path2.default.relative(sourceDirPath, filePath);
      let match = false;
      for (const reg of includes) {
        if (relativeFilePath.match(reg)) {
          match = true;
          break;
        }
      }
      if (!match) return;

      for (const reg of excludes) {
        if (relativeFilePath.match(reg)) return;
      }

      console.log(`parse: ${filePath}`);
      const temp = this._traverseForTest(config, config.test.type, config.test.source, filePath);
      if (!temp) return;
      results.push(...temp.results);

      asts.push({ filePath: `test${_path2.default.sep}${relativeFilePath}`, ast: temp.ast });
    });
  }

  /**
   * set default config to specified config.
   * @param {ESDocConfig} config - specified config.
   * @private
   */
  static _setDefaultConfig(config) {
    if (!config.includes) config.includes = ['\\.(js|es6)$'];

    if (!config.excludes) config.excludes = ['\\.config\\.(js|es6)$'];

    if (!config.access) config.access = ['public', 'protected'];

    if (!('autoPrivate' in config)) config.autoPrivate = true;

    if (!('unexportIdentifier' in config)) config.unexportIdentifier = false;

    if (!('builtinExternal' in config)) config.builtinExternal = true;

    if (!('undocumentIdentifier' in config)) config.undocumentIdentifier = true;

    if (!('coverage' in config)) config.coverage = true;

    if (!('includeSource' in config)) config.includeSource = true;

    if (!('lint' in config)) config.lint = true;

    if (!config.index) config.index = './README.md';

    if (!config.package) config.package = './package.json';

    if (!config.styles) config.styles = [];

    if (!config.scripts) config.scripts = [];

    if (config.test) {
      (0, _assert2.default)(config.test.type);
      (0, _assert2.default)(config.test.source);
      if (!config.test.includes) config.test.includes = ['(spec|Spec|test|Test)\\.(js|es6)$'];
      if (!config.test.excludes) config.test.excludes = ['\\.config\\.(js|es6)$'];
    }

    if (config.manual) {
      if (!('coverage' in config.manual)) config.manual.coverage = true;
    }
  }

  /* eslint-disable no-unused-vars */
  static _deprecatedConfig(config) {}
  // do nothing


  /**
   * Use built-in external document.
   * built-in external has number, string, boolean, etc...
   * @param {ESDocConfig} config - config of esdoc.
   * @param {DocObject[]} results - this method pushes DocObject to this param.
   * @private
   * @see {@link src/BuiltinExternal/ECMAScriptExternal.js}
   */
  static _useBuiltinExternal(config, results) {
    const dirPath = _path2.default.resolve(__dirname, './BuiltinExternal/');
    this._walk(dirPath, filePath => {
      const temp = this._traverse(config, dirPath, filePath);
      /* eslint-disable no-return-assign */
      temp.results.forEach(v => v.builtinExternal = true);
      const res = temp.results.filter(v => v.kind === 'external');
      results.push(...res);
    });
  }

  /**
   * walk recursive in directory.
   * @param {string} dirPath - target directory path.
   * @param {function(entryPath: string)} callback - callback for find file.
   * @private
   */
  static _walk(dirPath, callback) {
    const entries = _fs2.default.readdirSync(dirPath);

    for (const entry of entries) {
      const entryPath = _path2.default.resolve(dirPath, entry);
      const stat = _fs2.default.statSync(entryPath);

      if (stat.isFile()) {
        callback(entryPath);
      } else if (stat.isDirectory()) {
        this._walk(entryPath, callback);
      }
    }
  }

  /**
   * traverse doc comment in JavaScript file.
   * @param {ESDocConfig} config - config of esdoc.
   * @param {string} inDirPath - root directory path.
   * @param {string} filePath - target JavaScript file path.
   * @param {string} [packageName] - npm package name of target.
   * @param {string} [mainFilePath] - npm main file path of target.
   * @returns {Object} - return document that is traversed.
   * @property {DocObject[]} results - this is contained JavaScript file.
   * @property {AST} ast - this is AST of JavaScript file.
   * @private
   */
  static _traverse(config, inDirPath, filePath, packageName, mainFilePath) {
    logger.i(`parsing: ${filePath}`);
    let ast;
    try {
      ast = _ESParser2.default.parse(config, filePath);
    } catch (e) {
      _InvalidCodeLogger2.default.showFile(filePath, e);
      return null;
    }

    const pathResolver = new _PathResolver2.default(inDirPath, filePath, packageName, mainFilePath);
    const factory = new _DocFactory2.default(ast, pathResolver);

    _ASTUtil2.default.traverse(ast, (node, parent) => {
      try {
        factory.push(node, parent);
      } catch (e) {
        _InvalidCodeLogger2.default.show(filePath, node);
        throw e;
      }
    });

    return { results: factory.results, ast: ast };
  }

  /**
   * traverse doc comment in test code file.
   * @param {ESDocConfig} config - config of esdoc.
   * @param {string} type - test code type.
   * @param {string} inDirPath - root directory path.
   * @param {string} filePath - target test code file path.
   * @returns {Object} return document info that is traversed.
   * @property {DocObject[]} results - this is contained test code.
   * @property {AST} ast - this is AST of test code.
   * @private
   */
  static _traverseForTest(config, type, inDirPath, filePath) {
    let ast;
    try {
      ast = _ESParser2.default.parse(config, filePath);
    } catch (e) {
      _InvalidCodeLogger2.default.showFile(filePath, e);
      return null;
    }
    const pathResolver = new _PathResolver2.default(inDirPath, filePath);
    const factory = new _TestDocFactory2.default(type, ast, pathResolver);

    _ASTUtil2.default.traverse(ast, (node, parent) => {
      try {
        factory.push(node, parent);
      } catch (e) {
        _InvalidCodeLogger2.default.show(filePath, node);
        throw e;
      }
    });

    return { results: factory.results, ast: ast };
  }
}
exports.default = ESDoc;