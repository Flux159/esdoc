'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@property} */
describe('TestPropertyReturn', () => {
  const doc = (0, _util.readDoc)('class/src/Property/Return.js~TestPropertyReturn.html');

  describe('in details', () => {
    it('has desc.', () => {
      (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, '[data-ice="returnProperties"] tbody tr:nth-child(1)', 'x1 number this is x1 of return value.');
        _util.assert.includes(doc, '[data-ice="returnProperties"] tbody tr:nth-child(2)', 'x2 TestClassDefinition this is x2 of return value.');
        _util.assert.includes(doc, '[data-ice="returnProperties"] tbody tr:nth-child(2) a', 'class/src/Class/Definition.js~TestClassDefinition.html', 'href');
      });
    });
  });
});