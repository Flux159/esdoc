'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _util = require('../util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Plugin} */
describe('test config.plugins: [...]', () => {
  (0, _util.cli)('./test/fixture/config/esdoc-plugins.json');

  function readDoc(filePath) {
    return (0, _util.readDoc)(filePath, './test/fixture/dest/esdoc-plugins');
  }

  /* eslint-disable global-require */
  it('call each handlers', () => {
    const pluginPath = _path2.default.resolve('./test/fixture/package/plugin/MyPlugin1.js');
    const plugin = require(pluginPath);

    (0, _util.assert)(plugin.callInfo.handlerNames.onStart);
    (0, _util.assert)(plugin.callInfo.handlerNames.onHandleConfig);
    (0, _util.assert)(plugin.callInfo.handlerNames.onHandleCode);
    (0, _util.assert)(plugin.callInfo.handlerNames.onHandleCodeParser);
    (0, _util.assert)(plugin.callInfo.handlerNames.onHandleAST);
    (0, _util.assert)(plugin.callInfo.handlerNames.onHandleTag);
    (0, _util.assert)(plugin.callInfo.handlerNames.onHandleHTML);
    (0, _util.assert)(plugin.callInfo.handlerNames.onComplete);
    _util.assert.deepEqual(plugin.callInfo.option, { foo: 1 });
    _util.assert.equal(plugin.callInfo.usedParser, true);
  });

  it('custom document by each handlers', () => {
    const doc = readDoc('index.html');

    _util.assert.includes(doc, 'head title', 'Modified Config');
    _util.assert.includes(doc, '.navigation', 'MyClass_ModifiedCode_ModifiedAST_ModifiedTag_ModifiedHTML');
    _util.assert.includes(doc, 'head meta[name="x-from-plugin"]', 'fileName:', 'content');
  });

  /* eslint-disable global-require */
  it('call multi plugins', () => {
    const pluginPath = _path2.default.resolve('./test/fixture/package/plugin/MyPlugin1.js');
    const plugin = require(pluginPath);

    _util.assert.deepEqual(plugin.callInfo.handlerNames.onStart, ['MyPlugin1', 'MyPlugin2']);
    _util.assert.deepEqual(plugin.callInfo.handlerNames.onHandleConfig, ['MyPlugin1', 'MyPlugin2']);
    _util.assert.deepEqual(plugin.callInfo.handlerNames.onHandleCode, ['MyPlugin1', 'MyPlugin2']);
    _util.assert.deepEqual(plugin.callInfo.handlerNames.onHandleCodeParser, ['MyPlugin1', 'MyPlugin2']);
    _util.assert.deepEqual(plugin.callInfo.handlerNames.onHandleAST, ['MyPlugin1', 'MyPlugin2']);
    _util.assert.deepEqual(plugin.callInfo.handlerNames.onHandleTag, ['MyPlugin1', 'MyPlugin2']);
    _util.assert.deepEqual(plugin.callInfo.handlerNames.onHandleHTML, ['MyPlugin1', 'MyPlugin2']);
    _util.assert.deepEqual(plugin.callInfo.handlerNames.onComplete, ['MyPlugin1', 'MyPlugin2']);
  });
});