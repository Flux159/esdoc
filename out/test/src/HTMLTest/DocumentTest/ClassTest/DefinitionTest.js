'use strict';

var _util = require('./../../../util.js');

/** @test {ClassDocBuilder} */
describe('TestClassDefinition:', () => {
  const doc = (0, _util.readDoc)('class/src/Class/Definition.js~TestClassDefinition.html');

  /** @test {DocBuilder#_getTitle} */
  describe('in title:', () => {
    it('has document title', () => {
      _util.assert.includes(doc, 'head title', 'TestClassDefinition | ESDoc Test Fixture API Document');
    });
  });

  /** @test {ClassDocBuilder#_buildClassDoc} */
  describe('in header', () => {
    it('has header notice.', () => {
      (0, _util.find)(doc, '[data-ice="content"] .header-notice', doc => {
        _util.assert.includes(doc, '[data-ice="importPath"]', "import TestClassDefinition from 'esdoc-test-fixture'");
        _util.assert.includes(doc, '[data-ice="access"]', 'public');
        _util.assert.includes(doc, '[data-ice="kind"]', 'class');
        _util.assert.includes(doc, '[data-ice="source"]', 'source');
        _util.assert.includes(doc, '[data-ice="source"] a', 'file/src/Class/Definition.js.html#lineNumber4', 'href');
      });
    });
  });

  /** @test {ClassDocBuilder#_buildClassDoc} */
  describe('in detail', () => {
    it('has self detail.', () => {
      (0, _util.find)(doc, '[data-ice="content"] .self-detail', doc => {
        _util.assert.includes(doc, '[data-ice="name"]', 'TestClassDefinition');
        _util.assert.includes(doc, '[data-ice="description"]', 'this is TestClassDefinition.');
      });
    });
  });

  /** @test {ClassDocBuilder#_buildClassDoc} */
  describe('in summary', () => {
    it('has static member', () => {
      (0, _util.find)(doc, '[data-ice="staticMemberSummary"]', doc => {
        (0, _util.find)(doc, 'table[data-ice="summary"]:nth-of-type(1)', doc => {
          _util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1)', 'public static p1: number this is static p1.');
          _util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1) [data-ice="name"] a', 'class/src/Class/Definition.js~TestClassDefinition.html#static-member-p1', 'href');
        });
      });
    });

    it('has static method.', () => {
      (0, _util.find)(doc, '[data-ice="staticMethodSummary"]', doc => {
        (0, _util.find)(doc, 'table[data-ice="summary"]:nth-of-type(1)', doc => {
          _util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1)', 'public static method1() this is static method1.');
          _util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1) a', 'class/src/Class/Definition.js~TestClassDefinition.html#static-method-method1', 'href');
        });
      });
    });

    it('has constructor.', () => {
      (0, _util.find)(doc, '[data-ice="constructorSummary"]', doc => {
        (0, _util.find)(doc, 'table[data-ice="summary"]:nth-of-type(1)', doc => {
          _util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1)', 'public constructor() this is constructor.');
          _util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1) [data-ice="name"] a', 'class/src/Class/Definition.js~TestClassDefinition.html#instance-constructor-constructor', 'href');
        });
      });
    });

    it('has member.', () => {
      (0, _util.find)(doc, '[data-ice="memberSummary"]', doc => {
        (0, _util.find)(doc, 'table[data-ice="summary"]:nth-of-type(1)', doc => {
          _util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1)', 'public p1: number this is p1.');
          _util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1) [data-ice="name"] a', 'class/src/Class/Definition.js~TestClassDefinition.html#instance-member-p1', 'href');

          _util.assert.includes(doc, '[data-ice="target"]:nth-of-type(2)', 'public get value1: number this is get value1.');
          _util.assert.includes(doc, '[data-ice="target"]:nth-of-type(2) [data-ice="name"] a', 'class/src/Class/Definition.js~TestClassDefinition.html#instance-get-value1', 'href');

          _util.assert.includes(doc, '[data-ice="target"]:nth-of-type(3)', 'public set value2: number this is set value2.');
          _util.assert.includes(doc, '[data-ice="target"]:nth-of-type(3) [data-ice="name"] a', 'class/src/Class/Definition.js~TestClassDefinition.html#instance-set-value2', 'href');
        });
      });
    });

    it('has method summary.', () => {
      (0, _util.find)(doc, '[data-ice="methodSummary"]', doc => {
        (0, _util.find)(doc, 'table[data-ice="summary"]:nth-of-type(1)', doc => {
          _util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1)', 'public method1() this is method1.');
          _util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1) [data-ice="name"] a', 'class/src/Class/Definition.js~TestClassDefinition.html#instance-method-method1', 'href');
        });
      });
    });
  });

  /** @test {ClassDocBuilder#_buildClassDoc} */
  describe('in detail', () => {
    it('has static member.', () => {
      (0, _util.find)(doc, '[data-ice="staticMemberDetails"]', doc => {
        (0, _util.find)(doc, '[data-ice="detail"]:nth-of-type(1)', doc => {
          _util.assert.includes(doc, '#static-member-p1', 'public static p1: number');
          _util.assert.includes(doc, '[data-ice="description"]', 'this is static p1.');
        });
      });
    });

    it('has static method.', () => {
      (0, _util.find)(doc, '[data-ice="staticMethodDetails"]', doc => {
        (0, _util.find)(doc, '[data-ice="detail"]:nth-of-type(1)', doc => {
          _util.assert.includes(doc, '#static-method-method1', 'public static method1()');
          _util.assert.includes(doc, '[data-ice="description"]', 'this is static method1.');
        });
      });
    });

    it('has member.', () => {
      (0, _util.find)(doc, '[data-ice="memberDetails"]', doc => {
        (0, _util.find)(doc, '[data-ice="detail"]:nth-of-type(1)', doc => {
          _util.assert.includes(doc, '#instance-member-p1', 'public p1: number');
          _util.assert.includes(doc, '#instance-member-p1 + [data-ice="description"]', 'this is p1.');
        });

        (0, _util.find)(doc, '[data-ice="detail"]:nth-of-type(2)', doc => {
          _util.assert.includes(doc, '#instance-get-value1', 'public get value1: number');
          _util.assert.includes(doc, '#instance-get-value1 + [data-ice="description"]', 'this is get value1.');
        });

        (0, _util.find)(doc, '[data-ice="detail"]:nth-of-type(3)', doc => {
          _util.assert.includes(doc, '#instance-set-value2', 'public set value2: number');
          _util.assert.includes(doc, '#instance-set-value2 + [data-ice="description"]', 'this is set value2.');
        });
      });
    });

    it('has constructor detail.', () => {
      (0, _util.find)(doc, '[data-ice="constructorDetails"]', doc => {
        (0, _util.find)(doc, '[data-ice="detail"]:nth-of-type(1)', doc => {
          _util.assert.includes(doc, '#instance-constructor-constructor', 'public constructor()');
          _util.assert.includes(doc, '#instance-constructor-constructor + [data-ice="description"]', 'this is constructor.');
        });
      });
    });

    it('has method detail.', () => {
      (0, _util.find)(doc, '[data-ice="methodDetails"]', doc => {
        (0, _util.find)(doc, '[data-ice="detail"]:nth-of-type(1)', doc => {
          _util.assert.includes(doc, '#instance-method-method1', 'public method1()');
          _util.assert.includes(doc, '#instance-method-method1 ~ [data-ice="description"]', 'this is method1.');
        });
      });
    });
  });
});