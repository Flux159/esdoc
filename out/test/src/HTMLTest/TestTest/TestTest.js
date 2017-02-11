'use strict';

var _util = require('./../../util.js');

/**
 * @test {TestDocBuilder}
 * @test {TestDocBuilder#_buildTestDescribeDocHTML}
 */
describe('test integration of test', () => {
  const doc = (0, _util.readDoc)('test.html').find('[data-ice="tests"]');

  describe('describe/it style', () => {
    it('has describe', () => {
      (0, _util.findParent)(doc, 'a[href="test-file/test/DescTest.js.html#lineNumber2"]', '[data-ice="testDescribe"]', doc => {
        _util.assert.includes(doc, null, 'Use describe style mocha interface TestDescClass 3');
        _util.assert.multiIncludes(doc, 'a', ['test-file/test/DescTest.js.html#lineNumber2', 'class/src/Desc/Class.js~TestDescClass.html'], 'href');
      });
    });

    it('has it', () => {
      (0, _util.findParent)(doc, 'a[href="test-file/test/DescTest.js.html#lineNumber4"]', '[data-ice="testIt"]', doc => {
        _util.assert.includes(doc, null, 'Use it style mocha interface TestDescClass#constructor');
        _util.assert.multiIncludes(doc, 'a', ['test-file/test/DescTest.js.html#lineNumber4', 'class/src/Desc/Class.js~TestDescClass.html#instance-constructor-constructor'], 'href');
      });
    });

    it('has nested describe', () => {
      (0, _util.findParent)(doc, 'a[href="test-file/test/DescTest.js.html#lineNumber8"]', '[data-ice="testDescribe"]', doc => {
        _util.assert.includes(doc, null, 'Nested describe TestDescClass#p1 1');
        _util.assert.multiIncludes(doc, 'a', ['test-file/test/DescTest.js.html#lineNumber8', 'class/src/Desc/Class.js~TestDescClass.html#instance-member-p1'], 'href');
      });
    });

    it('has nested it', () => {
      (0, _util.findParent)(doc, 'a[href="test-file/test/DescTest.js.html#lineNumber10"]', '[data-ice="testIt"]', doc => {
        _util.assert.includes(doc, null, 'Nested it in describe testDescVariable');
        _util.assert.multiIncludes(doc, 'a', ['test-file/test/DescTest.js.html#lineNumber10', 'variable/index.html#static-variable-testDescVariable'], 'href');
      });
    });
  });

  describe('context style', () => {
    it('has context', () => {
      (0, _util.findParent)(doc, 'a[href="test-file/test/DescTest.js.html#lineNumber15"]', '[data-ice="testDescribe"]', doc => {
        _util.assert.includes(doc, null, 'Use context style mocha interface TestDescClass#method1 1');
        _util.assert.multiIncludes(doc, 'a', ['test-file/test/DescTest.js.html#lineNumber15', 'class/src/Desc/Class.js~TestDescClass.html#instance-method-method1'], 'href');
      });
    });

    it('has context it', () => {
      (0, _util.findParent)(doc, 'a[href="test-file/test/DescTest.js.html#lineNumber17"]', '[data-ice="testIt"]', doc => {
        _util.assert.includes(doc, null, 'Nested it in context testDescFunction');
        _util.assert.multiIncludes(doc, 'a', ['test-file/test/DescTest.js.html#lineNumber17', 'function/index.html#static-function-testDescFunction'], 'href');
      });
    });
  });

  describe('suite/test style', () => {
    it('has suite', () => {
      (0, _util.findParent)(doc, 'a[href="test-file/test/DescTest.js.html#lineNumber23"]', '[data-ice="testDescribe"]', doc => {
        _util.assert.includes(doc, null, 'Use suite style mocha interface TestDescClass 2');
        _util.assert.multiIncludes(doc, 'a', ['test-file/test/DescTest.js.html#lineNumber23', 'class/src/Desc/Class.js~TestDescClass.html'], 'href');
      });
    });

    it('has test', () => {
      (0, _util.findParent)(doc, 'a[href="test-file/test/DescTest.js.html#lineNumber25"]', '[data-ice="testIt"]', doc => {
        _util.assert.includes(doc, null, 'Use test style mocha interface TestDescClass#constructor');
        _util.assert.multiIncludes(doc, 'a', ['test-file/test/DescTest.js.html#lineNumber25', 'class/src/Desc/Class.js~TestDescClass.html#instance-constructor-constructor'], 'href');
      });
    });

    it('has nested suite', () => {
      (0, _util.findParent)(doc, 'a[href="test-file/test/DescTest.js.html#lineNumber29"]', '[data-ice="testDescribe"]', doc => {
        _util.assert.includes(doc, null, 'Nested suite TestDescClass#p1 1');
        _util.assert.multiIncludes(doc, 'a', ['test-file/test/DescTest.js.html#lineNumber29', 'class/src/Desc/Class.js~TestDescClass.html#instance-member-p1'], 'href');
      });
    });

    it('has nested test', () => {
      (0, _util.findParent)(doc, 'a[href="test-file/test/DescTest.js.html#lineNumber31"]', '[data-ice="testIt"]', doc => {
        _util.assert.includes(doc, null, 'Nested test TestDescClass#method1');
        _util.assert.multiIncludes(doc, 'a', ['test-file/test/DescTest.js.html#lineNumber31', 'class/src/Desc/Class.js~TestDescClass.html#instance-method-method1'], 'href');
      });
    });
  });
});