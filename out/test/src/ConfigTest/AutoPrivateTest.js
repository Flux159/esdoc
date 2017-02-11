'use strict';

var _util = require('../util.js');

/** @test {DocResolver#_resolveAccess} */
describe('test config.autoPrivate: false', () => {
  (0, _util.cli)('./test/fixture/config/esdoc-autoPrivate.json');

  function readDoc(filePath) {
    return (0, _util.readDoc)(filePath, './test/fixture/dest/esdoc-autoPrivate');
  }

  it('treat _class as public', () => {
    const doc = readDoc('class/src/Access/Class.js~_TestAccessClassAutoPrivate.html');
    _util.assert.includes(doc, '.self-detail [data-ice="name"]', '_TestAccessClassAutoPrivate');
  });

  it('treat _method as public', () => {
    const doc = readDoc('class/src/Access/Method.js~TestAccessMethod.html');
    _util.assert.includes(doc, '#instance-method-_method4', 'public _method4()');
  });

  it('treat _member as public', () => {
    const doc = readDoc('class/src/Access/Property.js~TestAccessProperty.html');
    _util.assert.includes(doc, '#instance-member-_p4', 'public _p4: number');
  });

  it('treat _function as public', () => {
    const doc = readDoc('function/index.html');
    _util.assert.includes(doc, '#static-function-_testAccessFunctionAutoPrivate', 'public _testAccessFunctionAutoPrivate()');
  });

  it('treat _variable as public', () => {
    const doc = readDoc('variable/index.html');
    _util.assert.includes(doc, '#static-variable-_testAccessVariableAutoPrivate', 'public _testAccessVariableAutoPrivate: number');
  });
});