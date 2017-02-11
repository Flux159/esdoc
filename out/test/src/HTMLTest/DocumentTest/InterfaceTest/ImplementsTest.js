'use strict';

var _util = require('./../../../util.js');

/** @test {ClassDoc#@implements} */
describe('TestInterfaceImplements', () => {
  const doc = (0, _util.readDoc)('class/src/Interface/Implements.js~TestInterfaceImplements.html');

  it('has implements.', () => {
    (0, _util.find)(doc, '.self-detail [data-ice="implements"]', doc => {
      _util.assert.includes(doc, 'ul', 'TestInterfaceDefinition, TestInterfaceImplementsInner');
      _util.assert.includes(doc, 'ul a[href="class/src/Interface/Definition.js~TestInterfaceDefinition.html"]', 'TestInterfaceDefinition');
      _util.assert.includes(doc, 'ul a[href="class/src/Interface/Implements.js~TestInterfaceImplementsInner.html"]', 'TestInterfaceImplementsInner');
    });
  });
});