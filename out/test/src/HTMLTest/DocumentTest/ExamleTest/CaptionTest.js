'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@example} */
describe('TestExampleCaption', () => {
  const doc = (0, _util.readDoc)('class/src/Example/Caption.js~TestExampleCaption.html');

  describe('in self detail', () => {
    it('has caption of example.', () => {
      _util.assert.includes(doc, '.self-detail [data-ice="exampleDoc"] [data-ice="exampleCaption"]', 'this is caption');
    });
  });
});