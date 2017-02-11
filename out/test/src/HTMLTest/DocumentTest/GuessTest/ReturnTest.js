'use strict';

var _util = require('./../../../util.js');

/** @test {ParamParser#guessReturn} */
describe('TestGuessParam', () => {
  const doc = (0, _util.readDoc)('class/src/Guess/Return.js~TestGuessReturn.html');

  describe('in summary', () => {
    it('has guessed return.', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public method1(): number');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method2"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public method2(): number[]');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method3"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public method3(): {"x1": number, "x2": string}');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method4"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public method4(): string');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method5"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public method5(): {"a": *, ...obj: Object}');
      });
    });
  });

  describe('in details', () => {
    it('has guessed param.', () => {
      (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public method1(): number');
      });

      (0, _util.findParent)(doc, '[id="instance-method-method2"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public method2(): number[]');
      });

      (0, _util.findParent)(doc, '[id="instance-method-method3"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public method3(): {"x1": number, "x2": string}');
      });

      (0, _util.findParent)(doc, '[id="instance-method-method4"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public method4(): string');
      });

      (0, _util.findParent)(doc, '[id="instance-method-method5"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public method5(): {"a": *, ...obj: Object}');
      });
    });
  });
});