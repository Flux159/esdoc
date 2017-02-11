'use strict';

var _util = require('./../../../util.js');

/** @test {FunctionDoc#@return} */
describe('test return', () => {
  const doc = (0, _util.readDoc)('function/index.html');

  describe('testReturnFunction1', () => {
    describe('in summary', () => {
      it('has return.', () => {
        (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-function-testReturnFunction1"]', '[data-ice="target"]', doc => {
          _util.assert.includes(doc, null, 'public testReturnFunction1(): TestClassDefinition');
        });
      });
    });

    describe('in details', () => {
      it('has return.', () => {
        (0, _util.findParent)(doc, '[id="static-function-testReturnFunction1"]', '[data-ice="detail"]', doc => {
          _util.assert.includes(doc, 'h3', 'public testReturnFunction1(): TestClassDefinition');
          _util.assert.includes(doc, '[data-ice="returnParams"] tbody tr', 'TestClassDefinition this is return value.');
          _util.assert.includes(doc, '[data-ice="returnParams"] tbody tr a', 'class/src/Class/Definition.js~TestClassDefinition.html', 'href');
        });
      });
    });
  });

  describe('testReturnFunction2', () => {
    describe('in summary', () => {
      it('has return.', () => {
        (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-function-testReturnFunction2"]', '[data-ice="target"]', doc => {
          _util.assert.includes(doc, null, 'public testReturnFunction2(): number');
        });
      });
    });

    describe('in details', () => {
      it('has return.', () => {
        (0, _util.findParent)(doc, '[id="static-function-testReturnFunction2"]', '[data-ice="detail"]', doc => {
          _util.assert.includes(doc, 'h3', 'public testReturnFunction2(): number');
          _util.assert.includes(doc, '[data-ice="returnParams"] tbody tr', 'number this is return value.');
        });
      });
    });
  });
});