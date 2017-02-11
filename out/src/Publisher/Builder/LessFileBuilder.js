'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _less = require('less');

var _less2 = _interopRequireDefault(_less);

var _DocBuilder = require('./DocBuilder.js');

var _DocBuilder2 = _interopRequireDefault(_DocBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * LESS to CSS file output builder class.
 */
class LessFileBuilder extends _DocBuilder2.default {
  /**
   * execute building output.
   */
  exec() {
    console.log('output: ./css/style.css');
    console.log('output: ./css/style.css.map');

    this._setPath();

    // check theme
    let theme = (this._config.less || {}).theme;
    if (theme) {
      if (/^[a-z0-9\-_]+$/i.test(theme)) {
        // theme is a file alias relative to `/less/theme` directory
        theme = _path2.default.resolve(this.path.input, `./theme/${theme}.less`);
      } else {
        // otherwise theme is a real path to filename
        theme = _path2.default.resolve(theme);
      }
      _fs2.default.readFile(theme, 'utf8', (err, data) => {
        if (err) throw err;
        this._lessRender(data);
      });
    } else {
      this._lessRender();
    }
  }

  /**
   * set path to `/less`, `/css`, and relative from `/css` to `/less`.
   * @private
   */
  _setPath() {
    const input = _path2.default.resolve(__dirname, './template/less');
    const output = _path2.default.resolve(this._config.destination, './css');
    const relative = _path2.default.relative(output, input);
    this.path = { input, output, relative };
  }

  /**
   * render less to css.
   * @param {string} data - less content of the theme file.
   * @private
   */
  _lessRender(data = '') {
    const imports = this._buildImports();
    _less2.default.render(`${imports}\n${data}`, {
      paths: [this.path.input], // Specify search paths for @import directives
      filename: 'style.less', // Specify a filename, for better error messages
      compress: false, // Minify CSS output
      sourceMap: {
        sourceMapURL: 'style.css.map',
        outputSourceFiles: true
      }
    }, (err, output) => {
      if (err) throw err;
      if (output.map) {
        this._outputCss(output.css);
        this._outputMap(output.map);
      } else {
        // if the map is undefined then there's no style to output
        this._outputCss();
      }
    });
  }

  /**
   * write style.css to destination.
   * @param {string} css - css content.
   * @private
   */
  _outputCss(css = '') {
    _fs2.default.writeFile(_path2.default.resolve(this.path.output, './style.css'), css, 'utf8', err => {
      if (err) throw err;
    });
  }

  /**
   * write style.css.map to destination.
   * @param {string} map - sourcemap.
   * @private
   */
  _outputMap(map = '') {
    const absolute = new RegExp(this.path.input, 'g');
    map = map.replace(absolute, this.path.relative);

    _fs2.default.writeFile(_path2.default.resolve(this.path.output, './style.css.map'), map, 'utf8', err => {
      if (err) throw err;
    });
  }

  /**
   * build list of LESS import.
   * @private
   */
  _buildImports() {
    // available less files in `/less/core` directory
    // note: `variables` is not listed here (see below)
    const available = ['text', 'layout', 'menu', 'search', 'aside', 'helper', 'doc', 'summary', 'manual', 'markdown'];
    const list = (this._config.less || {}).imports;
    const less = [];
    available.forEach(item => {
      if (!list || list.indexOf(item) !== -1) {
        less.push(`@import "core/${item}";`);
      }
    });
    if (less.length) {
      // if at least one less file is required
      // then automatically prepend `variables`
      less.unshift('@import "core/variables";');
    }
    return less.join('\n');
  }

}
exports.default = LessFileBuilder;