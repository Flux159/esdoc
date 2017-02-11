'use strict';

var _util = require('./../../../util.js');

/** @test {AbstractDoc#@emits} */
describe('TestEmitsMethod', () => {
  const doc = (0, _util.readDoc)('class/src/Emits/Method.js~TestEmitsMethod.html');

  describe('in details', () => {
    it('has desc.', () => {
      (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
        (0, _util.findParent)(doc, '[data-ice="emit"] [href$="TestEmitsMethodEvent1.html"]', '[data-ice="emit"]', doc => {
          _util.assert.includes(doc, 'a', 'TestEmitsMethodEvent1');
          _util.assert.includes(doc, 'a', 'class/src/Emits/Method.js~TestEmitsMethodEvent1.html', 'href');
          _util.assert.includes(doc, null, 'TestEmitsMethodEvent1 emits event when foo');
        });

        (0, _util.findParent)(doc, '[data-ice="emit"] [href$="TestEmitsMethodEvent2.html"]', '[data-ice="emit"]', doc => {
          _util.assert.includes(doc, 'a', 'TestEmitsMethodEvent2');
          _util.assert.includes(doc, 'a', 'class/src/Emits/Method.js~TestEmitsMethodEvent2.html', 'href');
          _util.assert.includes(doc, null, 'TestEmitsMethodEvent2 emits event when bar');
        });
      });
    });
  });
});