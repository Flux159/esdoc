'use strict';

var _util = require('./../../../util.js');

/** @test {MethodDoc#@_name} */
describe('TestComputedMethod:', () => {
  const doc = (0, _util.readDoc)('class/src/Computed/Method.js~TestComputedMethod.html');

  describe('in summary:', () => {
    it('has computed methods.', () => {
      (0, _util.find)(doc, '[data-ice="summary"]', doc => {
        _util.assert.includes(doc, `[href="class/src/Computed/Method.js~TestComputedMethod.html#instance-method-['foo']"]`, `['foo']`);
        _util.assert.includes(doc, `[href="class/src/Computed/Method.js~TestComputedMethod.html#instance-method-[Symbol.iterator]"]`, `[Symbol.iterator]`);
        _util.assert.includes(doc, '[href="class/src/Computed/Method.js~TestComputedMethod.html#instance-method-[`${ foo }`]"]', '[`${ foo }`]');
        _util.assert.includes(doc, `[href="class/src/Computed/Method.js~TestComputedMethod.html#instance-method-[foo + bar]"]`, `[foo + bar]`);
        _util.assert.includes(doc, `[href="class/src/Computed/Method.js~TestComputedMethod.html#instance-method-[foo()]"]`, `[foo()]`);
        _util.assert.includes(doc, `[href="class/src/Computed/Method.js~TestComputedMethod.html#instance-method-[foo.bar()]"]`, `[foo.bar()]`);
        _util.assert.includes(doc, `[href="class/src/Computed/Method.js~TestComputedMethod.html#instance-method-[foo.bar.baz]"]`, `[foo.bar.baz]`);
        _util.assert.includes(doc, `[href="class/src/Computed/Method.js~TestComputedMethod.html#instance-method-[foo.bar]"]`, `[foo.bar]`);
        _util.assert.includes(doc, `[href="class/src/Computed/Method.js~TestComputedMethod.html#instance-method-[foo.p + bar]"]`, `[foo.p + bar]`);
        _util.assert.includes(doc, `[href="class/src/Computed/Method.js~TestComputedMethod.html#instance-method-[foo]"]`, `[foo]`);
      });
    });
  });

  describe('in detail:', () => {
    it('has computed method.', () => {
      _util.assert.includes(doc, `[id="instance-method-['foo']"] [data-ice="name"]`, `['foo']`);
      _util.assert.includes(doc, `[id="instance-method-[Symbol.iterator]"] [data-ice="name"]`, `[Symbol.iterator]`);
      _util.assert.includes(doc, '[id="instance-method-[`${ foo }`]"] [data-ice="name"]', '[`${ foo }`]');
      _util.assert.includes(doc, `[id="instance-method-[foo + bar]"] [data-ice="name"]`, `[foo + bar]`);
      _util.assert.includes(doc, `[id="instance-method-[foo()]"] [data-ice="name"]`, `[foo()]`);
      _util.assert.includes(doc, `[id="instance-method-[foo.bar()]"] [data-ice="name"]`, `[foo.bar()]`);
      _util.assert.includes(doc, `[id="instance-method-[foo.bar.baz]"] [data-ice="name"]`, `[foo.bar.baz]`);
      _util.assert.includes(doc, `[id="instance-method-[foo.bar]"] [data-ice="name"]`, `[foo.bar]`);
      _util.assert.includes(doc, `[id="instance-method-[foo.p + bar]"] [data-ice="name"]`, `[foo.p + bar]`);
      _util.assert.includes(doc, `[id="instance-method-[foo]"] [data-ice="name"]`, `[foo]`);
    });
  });
}); /* eslint-disable no-template-curly-in-string, no-multi-spaces */