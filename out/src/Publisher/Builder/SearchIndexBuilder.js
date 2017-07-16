'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _util = require('./util.js');

var _DocBuilder = require('./DocBuilder.js');

var _DocBuilder2 = _interopRequireDefault(_DocBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Search index of identifier builder class.
 */
class SearchIndexBuilder extends _DocBuilder2.default {
  /**
  * get manual config based on ``config.manual``.
  * @returns {ManualConfigItem[]} built manual config.
  * @private
  */
  _getManualConfig() {
    const m = this._config.manual;
    const manualConfig = [];
    if (m.overview) manualConfig.push({ label: 'Overview', paths: m.overview });
    if (m.design) manualConfig.push({ label: 'Design', paths: m.design });
    if (m.installation) manualConfig.push({ label: 'Installation', paths: m.installation });
    if (m.tutorial) manualConfig.push({ label: 'Tutorial', paths: m.tutorial });
    if (m.usage) manualConfig.push({ label: 'Usage', paths: m.usage });
    if (m.configuration) manualConfig.push({ label: 'Configuration', paths: m.configuration });
    if (m.advanced) manualConfig.push({ label: 'Advanced', paths: m.advanced });
    if (m.example) manualConfig.push({ label: 'Example', paths: m.example });
    manualConfig.push({ label: 'Reference', fileName: 'identifiers.html', references: true });
    if (m.faq) manualConfig.push({ label: 'FAQ', paths: m.faq });
    if (m.changelog) manualConfig.push({ label: 'Changelog', paths: m.changelog });
    return manualConfig;
  }

  /**
  * get manual file name.
  * @param {ManualConfigItem} item - target manual config item.
  * @param {string} filePath - target manual markdown file path.
  * @returns {string} file name.
  * @private
  */
  _getManualOutputFileName(item, filePath) {
    if (item.fileName) return item.fileName;

    const fileName = _path2.default.parse(filePath).name;
    return `manual/${item.label.toLowerCase()}/${fileName}.html`;
  }

  /**
   * convert markdown to html.
   * if markdown has only one ``h1`` and it's text is ``item.label``, remove the ``h1``.
   * because duplication ``h1`` in output html.
   * @param {string} filePath - target.
   * @returns {string} converted html.
   * @private
   */
  _convertMDToHTML(filePath) {
    const content = _fsExtra2.default.readFileSync(filePath).toString();
    const html = (0, _util.markdown)(content);
    const $root = _cheerio2.default.load(html).root();
    return $root.html();
  }

  buildManualSearchIndex() {
    const toc = [];
    const manualConfig = this._getManualConfig();

    manualConfig.forEach(item => {
      for (const filePath of item.paths) {
        const fileName = this._getManualOutputFileName(item, filePath);
        const html = this._convertMDToHTML(filePath);
        const $root = _cheerio2.default.load(html).root();
        const h1Count = $root.find('h1').length;
        const sectionCount = $root.find('h1,h2,h3,h4,h5').length;

        $root.find('h1,h2,h3,h4,h5').each((i, el) => {
          const $el = (0, _cheerio2.default)(el);
          const label = $el.text();
          const indent = `indent-${el.tagName.toLowerCase()}`;

          let link = `${fileName}#${$el.attr('id')}`;
          if (el.tagName.toLowerCase() === 'h1' && h1Count === 1) link = fileName;

          toc.push({ label, link, indent, sectionCount });
        });
      }
    });

    return toc;
  }

  /**
   * execute building output.
   * @param {function(javascript: string, filePath: string)} callback - is called with output.
   */
  exec(callback) {
    const searchIndex = [];
    const docs = this._find({});

    for (const doc of docs) {
      let indexText;
      let url;
      let displayText;

      if (doc.importPath) {
        displayText = `<span>${doc.name}</span> <span class="search-result-import-path">${doc.importPath}</span>`;
        indexText = `${doc.importPath}~${doc.name}`.toLowerCase();
        url = this._getURL(doc);
      } else if (doc.kind === 'testDescribe' || doc.kind === 'testIt') {
        displayText = doc.testFullDescription;
        indexText = [...(doc.testTargets || []), ...(doc._custom_test_targets || [])].join(' ').toLowerCase();
        const filePath = doc.longname.split('~')[0];
        const fileDoc = this._find({ kind: 'testFile', longname: filePath })[0];
        url = `${this._getURL(fileDoc)}#lineNumber${doc.lineNumber}`;
      } else if (doc.kind === 'external') {
        displayText = doc.longname;
        indexText = displayText.toLowerCase();
        url = doc.externalLink;
      } else {
        displayText = doc.longname;
        indexText = displayText.toLowerCase();
        url = this._getURL(doc);
      }

      let kind = doc.kind;
      /* eslint-disable default-case */
      switch (kind) {
        case 'constructor':
          kind = 'method';
          break;
        case 'get':
        case 'set':
          kind = 'member';
          break;
        case 'testDescribe':
        case 'testIt':
          kind = 'test';
          break;
      }

      searchIndex.push([indexText, url, displayText, kind]);
    }

    // Manual is not part of docs, its in this._config.manual (see ManualDocBuilder)
    // What you want to do is get the TOC similar to how ManualDocBuilder does it
    // Then add it to the search index below w/ proper links, etc.
    const toc = this.buildManualSearchIndex();
    toc.forEach(manualElement => {
      searchIndex.push([manualElement.label, manualElement.link, manualElement.label, 'manual']);
    });

    searchIndex.sort((a, b) => {
      if (a[2] === b[2]) {
        return 0;
      } else if (a[2] < b[2]) {
        return -1;
      } else {
        return 1;
      }
    });

    const javascript = `window.esdocSearchIndex = ${JSON.stringify(searchIndex, null, 2)}`;

    callback(javascript, 'script/search_index.js');
  }
}
exports.default = SearchIndexBuilder;