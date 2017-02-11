'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _ParamParser = require('../../../src/Parser/ParamParser.js');

var _ParamParser2 = _interopRequireDefault(_ParamParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {ParamParser} */
describe('ParamParser:', () => {
  /** @test {ParamParser.parseParamValue} */
  it('parse param value.', () => {
    const value = '{number} p1 this is desc';
    const { typeText, paramName, paramDesc } = _ParamParser2.default.parseParamValue(value);
    _assert2.default.equal(typeText, 'number');
    _assert2.default.equal(paramName, 'p1');
    _assert2.default.equal(paramDesc, 'this is desc');
  });

  /** @test {ParamParser.parseParamValue} */
  it('parse param value with hyphen prefix.', () => {
    const value = '{number} p1 - this is desc';
    const { typeText, paramName, paramDesc } = _ParamParser2.default.parseParamValue(value);
    _assert2.default.equal(typeText, 'number');
    _assert2.default.equal(paramName, 'p1');
    _assert2.default.equal(paramDesc, 'this is desc');
  });

  /** @test {ParamParser.parseParamValue} */
  it('parse param value without param name', () => {
    const value = '{number} this is desc';
    const { typeText, paramDesc } = _ParamParser2.default.parseParamValue(value, true, false, true);
    _assert2.default.equal(typeText, 'number');
    _assert2.default.equal(paramDesc, 'this is desc');
  });

  /** @test {ParamParser.parseParamValue} */
  it('parse param value without param desc', () => {
    const value = '{number} p1';
    const { typeText, paramName } = _ParamParser2.default.parseParamValue(value, true, true, false);
    _assert2.default.equal(typeText, 'number');
    _assert2.default.equal(paramName, 'p1');
  });

  /** @test {ParamParser.parseParamValue} */
  it('parse param value with complex', () => {
    const value = '{!(number|string|boolean[])} [p1=10] this is desc';
    const { typeText, paramName, paramDesc } = _ParamParser2.default.parseParamValue(value);
    _assert2.default.equal(typeText, '!(number|string|boolean[])');
    _assert2.default.equal(paramName, '[p1=10]');
    _assert2.default.equal(paramDesc, 'this is desc');
  });

  /** @test {ParamParser.parseParam} */
  it('parse param.', () => {
    const value = '{number} p1 this is desc';
    const { typeText, paramName, paramDesc } = _ParamParser2.default.parseParamValue(value);
    const result = _ParamParser2.default.parseParam(typeText, paramName, paramDesc);
    _assert2.default.deepEqual(result, {
      nullable: null,
      types: ['number'],
      spread: false,
      optional: false,
      name: 'p1',
      description: 'this is desc'
    });
  });

  /** @test {ParamParser.parseParam} */
  it('parse param with complex.', () => {
    const value = '{?(number|string|boolean[])} [p1] this is desc';
    const { typeText, paramName, paramDesc } = _ParamParser2.default.parseParamValue(value);
    const result = _ParamParser2.default.parseParam(typeText, paramName, paramDesc);
    _assert2.default.deepEqual(result, {
      nullable: true,
      types: ['number', 'string', 'boolean[]'],
      spread: false,
      optional: true,
      name: 'p1',
      description: 'this is desc'
    });
  });

  /** @test {ParamParser.parseParam} */
  it('parse param with object ({}) as default.', () => {
    const value = '{!(number|string|boolean[])} [p1={}] this is desc';
    const { typeText, paramName, paramDesc } = _ParamParser2.default.parseParamValue(value);
    const result = _ParamParser2.default.parseParam(typeText, paramName, paramDesc);
    _assert2.default.deepEqual(result, {
      nullable: false,
      types: ['number', 'string', 'boolean[]'],
      spread: false,
      optional: true,
      name: 'p1',
      description: 'this is desc',
      defaultValue: '{}',
      defaultRaw: {}
    });
  });

  /** @test {ParamParser.parseParam} */
  it('parse param with complex.', () => {
    const value = '{...number} [p1=[10,20,30]] this is desc';
    const { typeText, paramName, paramDesc } = _ParamParser2.default.parseParamValue(value);
    const result = _ParamParser2.default.parseParam(typeText, paramName, paramDesc);
    _assert2.default.deepEqual(result, {
      nullable: null,
      types: ['...number'],
      spread: true,
      optional: true,
      name: 'p1',
      description: 'this is desc',
      defaultValue: '[10,20,30]',
      defaultRaw: [10, 20, 30]
    });
  });

  it('parse param even if description has {}.', () => {
    const value = '{number} p1 foo {a: number} bar';
    const { typeText, paramName, paramDesc } = _ParamParser2.default.parseParamValue(value);
    const result = _ParamParser2.default.parseParam(typeText, paramName, paramDesc);
    _assert2.default.deepEqual(result, {
      nullable: null,
      types: ['number'],
      spread: false,
      optional: false,
      name: 'p1',
      description: 'foo {a: number} bar'
    });
  });

  /** @test {ParamParser.parseParam} */
  it('throws error when empty type.', () => {
    const value = '{} foo bar';
    const { typeText, paramName, paramDesc } = _ParamParser2.default.parseParamValue(value);

    try {
      _ParamParser2.default.parseParam(typeText, paramName, paramDesc);
    } catch (e) {
      _assert2.default.equal(e.message, 'Empty Type found name=foo desc=bar');
      return;
    }
    (0, _assert2.default)(false);
  });
});