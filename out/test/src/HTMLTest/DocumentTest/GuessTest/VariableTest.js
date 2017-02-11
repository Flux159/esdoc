'use strict';

var _util = require('./../../../util.js');

/** @test {ParamParser#guessType} */
describe('testGuessVariable', () => {
  const doc = (0, _util.readDoc)('variable/index.html');

  describe('in summary', () => {
    it('has guessed type.', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-variable-testGuessVariable1"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public testGuessVariable1: number');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-variable-testGuessVariable2"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public testGuessVariable2: number[]');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-variable-testGuessVariable3"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public testGuessVariable3: {"x1": number, "x2": string}');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#static-variable-testGuessVariable4"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public testGuessVariable4: string');
      });
    });
  });

  describe('in details', () => {
    it('has guessed type.', () => {
      (0, _util.findParent)(doc, '[id="static-variable-testGuessVariable1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public testGuessVariable1: number');
      });

      (0, _util.findParent)(doc, '[id="static-variable-testGuessVariable2"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public testGuessVariable2: number[]');
      });

      (0, _util.findParent)(doc, '[id="static-variable-testGuessVariable3"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public testGuessVariable3: {"x1": number, "x2": string}');
      });

      (0, _util.findParent)(doc, '[id="static-variable-testGuessVariable4"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public testGuessVariable4: string');
      });
    });
  });
});