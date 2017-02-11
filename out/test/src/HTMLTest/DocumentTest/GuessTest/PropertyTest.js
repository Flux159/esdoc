'use strict';

var _util = require('./../../../util.js');

/** @test {ParamParser#guessParam} */
describe('TestGuessProperty', () => {
  const doc = (0, _util.readDoc)('class/src/Guess/Property.js~TestGuessProperty.html');

  describe('in summary', () => {
    it('has guessed member.', () => {
      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-member-p1"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public p1: number');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-member-p2"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public p2: number[]');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-member-p3"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public p3: {"x1": number, "x2": string}');
      });

      (0, _util.findParent)(doc, '[data-ice="summary"] [href$="#instance-member-p4"]', '[data-ice="target"]', doc => {
        _util.assert.includes(doc, null, 'public p4: string');
      });
    });
  });

  describe('in details', () => {
    it('has guessed member.', () => {
      (0, _util.findParent)(doc, '[id="instance-member-p1"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public p1: number');
      });

      (0, _util.findParent)(doc, '[id="instance-member-p2"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public p2: number[]');
      });

      (0, _util.findParent)(doc, '[id="instance-member-p3"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public p3: {"x1": number, "x2": string}');
      });

      (0, _util.findParent)(doc, '[id="instance-member-p4"]', '[data-ice="detail"]', doc => {
        _util.assert.includes(doc, 'h3', 'public p4: string');
      });
    });
  });
});