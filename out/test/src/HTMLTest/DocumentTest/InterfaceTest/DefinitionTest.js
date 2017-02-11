'use strict';

var _util = require('./../../../util.js');

/** @test {ClassDoc#@interface} */
describe('TestInterfaceDefinition', () => {
  const doc = (0, _util.readDoc)('class/src/Interface/Definition.js~TestInterfaceDefinition.html');

  it('has interface mark.', () => {
    _util.assert.includes(doc, '.header-notice [data-ice="kind"]', 'interface');
  });

  it('has direct subclass.', () => {
    (0, _util.find)(doc, '.self-detail [data-ice="directImplemented"]', doc => {
      _util.assert.includes(doc, 'a[href="class/src/Interface/Implements.js~TestInterfaceImplements.html"]', 'TestInterfaceImplements');
    });
  });
});