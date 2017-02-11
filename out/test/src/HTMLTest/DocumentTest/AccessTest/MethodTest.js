'use strict';

var _util = require('./../../../util.js');

/** @test {ClassDocBuilder#_buildClassDoc} */
describe('TestAccessMethod:', () => {
  const doc = (0, _util.readDoc)('class/src/Access/Method.js~TestAccessMethod.html');

  describe('in summary:', () => {
    it('has public accessor.', () => {
      (0, _util.find)(doc, '[data-ice="summary"] [href="class/src/Access/Method.js~TestAccessMethod.html#instance-method-method1"]', doc => {
        doc = doc.parents('[data-ice="target"]');
        _util.assert.includes(doc, null, 'public method1()');
      });
    });

    it('has protected accessor.', () => {
      (0, _util.find)(doc, '[data-ice="summary"] [href="class/src/Access/Method.js~TestAccessMethod.html#instance-method-method2"]', doc => {
        doc = doc.parents('[data-ice="target"]');
        _util.assert.includes(doc, null, 'protected method2()');
      });
    });

    it('has private accessor.', () => {
      (0, _util.find)(doc, '[data-ice="summary"] [href="class/src/Access/Method.js~TestAccessMethod.html#instance-method-method3"]', doc => {
        doc = doc.parents('[data-ice="target"]');
        _util.assert.includes(doc, null, 'private method3()');
      });
    });

    it('has auto private accessor.', () => {
      (0, _util.find)(doc, '[data-ice="summary"] [href="class/src/Access/Method.js~TestAccessMethod.html#instance-method-_method4"]', doc => {
        doc = doc.parents('[data-ice="target"]');
        _util.assert.includes(doc, null, 'private _method4()');
      });
    });
  });

  describe('in detail:', () => {
    it('has public accessor.', () => {
      _util.assert.includes(doc, '#instance-method-method1', 'public method1()');
    });

    it('has protected accessor.', () => {
      _util.assert.includes(doc, '#instance-method-method2', 'protected method2()');
    });

    it('has private accessor.', () => {
      _util.assert.includes(doc, '#instance-method-method3', 'private method3()');
    });

    it('has auto private accessor.', () => {
      _util.assert.includes(doc, '#instance-method-_method4', 'private _method4()');
    });
  });
});