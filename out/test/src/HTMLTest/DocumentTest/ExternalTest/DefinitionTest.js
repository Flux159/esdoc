'use strict';

var _util = require('./../../../util.js');

/** @test {ExternalDoc#@_name} */
describe('TestExternalDefinition', () => {
  const doc = (0, _util.readDoc)('index.html');

  it('has external document.', () => {
    (0, _util.findParent)(doc, '[data-ice="nav"] [data-ice="doc"] a[href="http://example.com"]', '[data-ice="doc"]', doc => {
      _util.assert.includes(doc, '[data-ice="name"]', 'TestExternalDefinition');
    });
  });
});