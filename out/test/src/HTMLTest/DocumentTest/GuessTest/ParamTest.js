'use strict';

var _util = require('./../../../util.js');

/** @test {ParamParser#guessParam} */
describe('TestGuessParam', () => {
  const doc = (0, _util.readDoc)('class/src/Guess/Param.js~TestGuessParam.html');

  describe('in summary', () => {
    it('has guessed param.', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public method1(p1: number, p2: string)');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method2"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public method2(p1: number[], p2: {"x1": string, "x2": boolean})');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method3"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public method3(arrayPattern: number[])');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method4"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public method4(objectPattern: {"x1": number, "x2": string})');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method5"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public method5(p1: ...*)');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method6"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public method6(objectPattern: {"x1": *, "x2": *})');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method7"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public method7(p1: *)');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method8"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public method8(p1: *)');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method9"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public method9(objectPattern: {"x": *, "y": *, ...z: Object})');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-method-method10"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public method10(arrayPattern: number[])');
      });
    });
  });

  describe('in details', () => {
    it('has guessed param.', () => {
      (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public method1(p1: number, p2: string)');
        _util.assert.includes(doc, '.params tbody tr:nth-child(1)', 'p1 number optional default: 123');
        _util.assert.includes(doc, '.params tbody tr:nth-child(2)', 'p2 string optional default: text');
      });

      (0, _util.findParent)(doc, '[id="instance-method-method2"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public method2(p1: number[], p2: {"x1": string, "x2": boolean})');
        _util.assert.includes(doc, '.params tbody tr:nth-child(1)', 'p1 number[] optional default: [123,456]');
        _util.assert.includes(doc, '.params tbody tr:nth-child(2)', 'p2 {"x1": string, "x2": boolean} optional default: {"x1":"text","x2":true}');
      });

      (0, _util.findParent)(doc, '[id="instance-method-method3"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public method3(arrayPattern: number[])');
        _util.assert.includes(doc, '.params tbody tr:nth-child(1)', 'arrayPattern number[] optional default: [123,456]');
      });

      (0, _util.findParent)(doc, '[id="instance-method-method4"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public method4(objectPattern: {"x1": number, "x2": string})');
        _util.assert.includes(doc, '.params tbody tr:nth-child(1)', 'objectPattern {"x1": number, "x2": string} optional default: {"x1":123,"x2":"text"}');
      });

      (0, _util.findParent)(doc, '[id="instance-method-method5"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public method5(p1: ...*)');
        _util.assert.includes(doc, '.params tbody tr:nth-child(1)', 'p1 ...*');
      });

      (0, _util.findParent)(doc, '[id="instance-method-method6"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public method6(objectPattern: {"x1": *, "x2": *})');
        _util.assert.includes(doc, '.params tbody tr:nth-child(1)', 'objectPattern {"x1": *, "x2": *} default: {"x1":null,"x2":null}');
      });

      (0, _util.findParent)(doc, '[id="instance-method-method7"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public method7(p1: *)');
        _util.assert.includes(doc, '.params tbody tr:nth-child(1)', 'p1 * optional default: value');
      });

      (0, _util.findParent)(doc, '[id="instance-method-method8"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public method8(p1: *)');
        _util.assert.includes(doc, '.params tbody tr:nth-child(1)', 'p1 * optional');
      });

      (0, _util.findParent)(doc, '[id="instance-method-method9"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public method9(objectPattern: {"x": *, "y": *, ...z: Object})');
        _util.assert.includes(doc, '.params tbody tr:nth-child(1)', 'objectPattern {"x": *, "y": *, ...z: Object} default: {"x":null,"y":null,"z":{}}');
      });

      (0, _util.findParent)(doc, '[id="instance-method-method10"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public method10(arrayPattern: number[])');
        _util.assert.includes(doc, '.params tbody tr:nth-child(1)', 'arrayPattern number[] default: [null, 10, *, "text", *]');
      });
    });
  });
});