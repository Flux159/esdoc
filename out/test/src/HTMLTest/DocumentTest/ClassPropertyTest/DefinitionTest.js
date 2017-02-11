'use strict';

var _util = require('./../../../util.js');

/** @test {ClassDocBuilder} */
describe('TestClassPropertyDefinition:', () => {
  const doc = (0, _util.readDoc)('class/src/ClassProperty/Definition.js~TestClassPropertyDefinition.html');

  /** @test {ClassDocBuilder#_buildClassDoc} */
  describe('in summary', () => {
    it('has static member', () => {
      (0, _util.find)(doc, '[data-ice="staticMemberSummary"]', doc => {
        (0, _util.find)(doc, 'table[data-ice="summary"]:nth-of-type(1)', doc => {
          _util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1)', 'public static p1: number this is static p1.');
          _util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1) [data-ice="name"] a', 'class/src/ClassProperty/Definition.js~TestClassPropertyDefinition.html#static-member-p1', 'href');
        });
      });
    });

    it('has member.', () => {
      (0, _util.find)(doc, '[data-ice="memberSummary"]', doc => {
        (0, _util.find)(doc, 'table[data-ice="summary"]:nth-of-type(1)', doc => {
          _util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1)', 'public p1: number this is p1.');
          _util.assert.includes(doc, '[data-ice="target"]:nth-of-type(1) [data-ice="name"] a', 'class/src/ClassProperty/Definition.js~TestClassPropertyDefinition.html#instance-member-p1', 'href');
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

    it('has member.', () => {
      (0, _util.find)(doc, '[data-ice="memberDetails"]', doc => {
        (0, _util.find)(doc, '[data-ice="detail"]:nth-of-type(1)', doc => {
          _util.assert.includes(doc, '#instance-member-p1', 'public p1: number');
          _util.assert.includes(doc, '#instance-member-p1 + [data-ice="description"]', 'this is p1.');
        });
      });
    });
  });
});