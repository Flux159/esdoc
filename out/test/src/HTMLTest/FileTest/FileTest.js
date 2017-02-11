'use strict';

var _util = require('./../../util.js');

/** @test {FileDocBuilder} */
describe('test source code file', () => {
  const doc = (0, _util.readDoc)('file/src/Desc/Class.js.html');

  it('has source code.', () => {
    _util.assert.includes(doc, 'body [data-ice="title"]', 'src/Desc/Class.js');
    _util.assert.includes(doc, 'code[data-ice="content"]', 'export default class TestDescClass {');
  });
});