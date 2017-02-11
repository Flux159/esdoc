'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@todo} */
describe('TestTodoClass', () => {
  const doc = (0, _util.readDoc)('class/src/Todo/Class.js~TestTodoClass.html');

  it('has todo at class.', () => {
    (0, _util.find)(doc, '.self-detail [data-ice="todo"]', doc => {
      _util.assert.includes(doc, 'li:nth-child(1)', 'this is first todo.');
      _util.assert.includes(doc, 'li:nth-child(2)', 'this is second todo.');
    });
  });

  it('has todo at constructor.', () => {
    (0, _util.findParent)(doc, '[id="instance-constructor-constructor"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="todo"]', 'this is todo');
    });
  });

  it('has see from member.', () => {
    (0, _util.findParent)(doc, '[id="instance-member-p1"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="todo"]', 'this is todo');
    });
  });

  it('has see from method.', () => {
    (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="todo"]', 'this is todo');
    });
  });
});