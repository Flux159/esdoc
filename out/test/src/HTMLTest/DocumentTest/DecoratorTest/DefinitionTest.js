'use strict';

var _util = require('./../../../util.js');

/**
 * @test {ClassDocBuilder#_buildClassDoc}
 * @test {DocBuilder#_buildDetailDocs}
 */
describe('TestDecoratorDefinition:', () => {
  const doc = (0, _util.readDoc)('class/src/Decorator/Definition.js~TestDecoratorDefinition.html');

  it('has decorator at class.', () => {
    (0, _util.find)(doc, '[data-ice="content"] .self-detail', doc => {
      _util.assert.includes(doc, '[data-ice="decorator"]', 'testDecoratorAnnotation1');
    });
  });

  it('has decorator at static method.', () => {
    (0, _util.findParent)(doc, '[id="static-method-method1"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="decorator"]', 'testDecoratorAnnotation1');
    });
  });

  it('has decorator at getter.', () => {
    (0, _util.findParent)(doc, '[id="instance-get-value1"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="decorator"]', 'testDecoratorAnnotation1');
    });
  });

  it('has decorator at setter.', () => {
    (0, _util.findParent)(doc, '[id="instance-set-value2"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="decorator"]', 'testDecoratorAnnotation1');
    });
  });

  it('has decorator at method.', () => {
    (0, _util.findParent)(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', doc => {
      _util.assert.includes(doc, '[data-ice="decorator"] li:nth-of-type(1)', 'testDecoratorAnnotation1');
      _util.assert.includes(doc, '[data-ice="decorator"] li:nth-of-type(2)', 'testDecoratorAnnotation2(true)');
    });
  });
});