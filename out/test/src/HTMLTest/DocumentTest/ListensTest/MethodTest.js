'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@listens} */
describe('TestListensMethod', () => {
  const doc = (0, _util.readDoc)('class/src/Listens/Method.js~TestListensMethod.html');

  it('has listens.', () => {
    (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
      (0, _util.findParent)(doc, 'a[href="class/src/Listens/Method.js~TestListensMethodEvent1.html"]', '[data-ice="listen"]', doc => {
        _util.assert.includes(doc, null, 'TestListensMethodEvent1 listen event because foo.');
        _util.assert.includes(doc, 'a[href="class/src/Listens/Method.js~TestListensMethodEvent1.html"]', 'TestListensMethodEvent1');
      });

      (0, _util.findParent)(doc, 'a[href="class/src/Listens/Method.js~TestListensMethodEvent2.html"]', '[data-ice="listen"]', doc => {
        _util.assert.includes(doc, null, 'TestListensMethodEvent2 listen event because bar.');
        _util.assert.includes(doc, 'a[href="class/src/Listens/Method.js~TestListensMethodEvent2.html"]', 'TestListensMethodEvent2');
      });
    });
  });
});