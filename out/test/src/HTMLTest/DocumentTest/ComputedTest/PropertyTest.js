'use strict';

var _util = require('./../../../util.js');

/** @test {MemberDoc#@_name} */
describe('TestComputedProperty:', () => {
  const doc = (0, _util.readDoc)('class/src/Computed/Property.js~TestComputedProperty.html');

  describe('in summary:', () => {
    it('has computed properties.', () => {
      (0, _util.find)(doc, '[data-ice="memberSummary"]', doc => {
        _util.assert.includes(doc, `[href="class/src/Computed/Property.js~TestComputedProperty.html#instance-member-['foo']"]`, `['foo']`);
        _util.assert.includes(doc, `[href="class/src/Computed/Property.js~TestComputedProperty.html#instance-member-[Symbol.iterator]"]`, `[Symbol.iterator]`);
        _util.assert.includes(doc, '[href="class/src/Computed/Property.js~TestComputedProperty.html#instance-member-[`${ foo }`]"]', '[`${ foo }`]');
        _util.assert.includes(doc, `[href="class/src/Computed/Property.js~TestComputedProperty.html#instance-member-[foo + bar]"]`, `[foo + bar]`);
        _util.assert.includes(doc, `[href="class/src/Computed/Property.js~TestComputedProperty.html#instance-member-[foo()]"]`, `[foo()]`);
        _util.assert.includes(doc, `[href="class/src/Computed/Property.js~TestComputedProperty.html#instance-member-[foo.bar()]"]`, `[foo.bar()]`);
        _util.assert.includes(doc, `[href="class/src/Computed/Property.js~TestComputedProperty.html#instance-member-[foo.bar.baz]"]`, `[foo.bar.baz]`);
        _util.assert.includes(doc, `[href="class/src/Computed/Property.js~TestComputedProperty.html#instance-member-[foo.bar]"]`, `[foo.bar]`);
        _util.assert.includes(doc, `[href="class/src/Computed/Property.js~TestComputedProperty.html#instance-member-[foo.p + bar]"]`, `[foo.p + bar]`);
        _util.assert.includes(doc, `[href="class/src/Computed/Property.js~TestComputedProperty.html#instance-member-[foo]"]`, `[foo]`);
      });
    });
  });

  describe('in detail:', () => {
    it('has computed properties.', () => {
      _util.assert.includes(doc, `[id="instance-member-['foo']"] [data-ice="name"]`, `['foo']`);
      _util.assert.includes(doc, `[id="instance-member-[Symbol.iterator]"] [data-ice="name"]`, `[Symbol.iterator]`);
      _util.assert.includes(doc, '[id="instance-member-[`${ foo }`]"] [data-ice="name"]', '[`${ foo }`]');
      _util.assert.includes(doc, `[id="instance-member-[foo + bar]"] [data-ice="name"]`, `[foo + bar]`);
      _util.assert.includes(doc, `[id="instance-member-[foo()]"] [data-ice="name"]`, `[foo()]`);
      _util.assert.includes(doc, `[id="instance-member-[foo.bar()]"] [data-ice="name"]`, `[foo.bar()]`);
      _util.assert.includes(doc, `[id="instance-member-[foo.bar.baz]"] [data-ice="name"]`, `[foo.bar.baz]`);
      _util.assert.includes(doc, `[id="instance-member-[foo.bar]"] [data-ice="name"]`, `[foo.bar]`);
      _util.assert.includes(doc, `[id="instance-member-[foo.p + bar]"] [data-ice="name"]`, `[foo.p + bar]`);
      _util.assert.includes(doc, `[id="instance-member-[foo]"] [data-ice="name"]`, `[foo]`);
    });
  });
}); /* eslint-disable no-template-curly-in-string, no-multi-spaces */