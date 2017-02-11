'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@todo} */
describe('testTodoVariable', () => {
  const doc = (0, _util.readDoc)('variable/index.html');

  it('has see.', () => {
    (0, _util.findParent)(doc, '[id="static-variable-testTodoVariable"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="todo"]', 'this is todo.');
    });
  });
});