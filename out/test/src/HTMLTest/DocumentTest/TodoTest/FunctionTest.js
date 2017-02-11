'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@todo} */
describe('testTodoFunction', () => {
  const doc = (0, _util.readDoc)('function/index.html');

  it('has todo.', () => {
    (0, _util.findParent)(doc, '[id="static-function-testTodoFunction"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="todo"]', 'this is todo.');
    });
  });
});