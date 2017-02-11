'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _CommentParser = require('../../../src/Parser/CommentParser.js');

var _CommentParser2 = _interopRequireDefault(_CommentParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {CommentParser} */
describe('CommentParser:', () => {
  /** @test {CommentParser.parse} */
  it('can parse doc comment.', () => {
    const value = `*
* this is desc.
* @tag1
* @tag2 tag2 value
* @tag3 tag3 value
* tag3 second value
*
* @tag4 tag4 value
*
`;
    const comment = { type: 'CommentBlock', value: value };
    const tags = _CommentParser2.default.parse(comment);
    _assert2.default.equal(tags.length, 5);
    _assert2.default.deepEqual(tags[0], { tagName: '@desc', tagValue: 'this is desc.' });
    _assert2.default.deepEqual(tags[1], { tagName: '@tag1', tagValue: '' });
    _assert2.default.deepEqual(tags[2], { tagName: '@tag2', tagValue: 'tag2 value' });
    _assert2.default.deepEqual(tags[3], { tagName: '@tag3', tagValue: 'tag3 value\ntag3 second value' });
    _assert2.default.deepEqual(tags[4], { tagName: '@tag4', tagValue: 'tag4 value' });
  });

  /** @test {CommentParser.parse} */
  it('can parse doc comments with trailing tabs', () => {
    const value = `*
\t* this is desc.
\t* @tag1
\t* @tag2 tag2 value
\t* @tag3 tag3 value
\t* tag3 second value
\t*
\t* @tag4 tag4 value
\t*
`;
    const comment = { type: 'CommentBlock', value: value };
    const tags = _CommentParser2.default.parse(comment);
    _assert2.default.equal(tags.length, 5);
    _assert2.default.deepEqual(tags[0], { tagName: '@desc', tagValue: 'this is desc.' });
    _assert2.default.deepEqual(tags[1], { tagName: '@tag1', tagValue: '' });
    _assert2.default.deepEqual(tags[2], { tagName: '@tag2', tagValue: 'tag2 value' });
    _assert2.default.deepEqual(tags[3], { tagName: '@tag3', tagValue: 'tag3 value\ntag3 second value' });
    _assert2.default.deepEqual(tags[4], { tagName: '@tag4', tagValue: 'tag4 value' });
  });

  /** @test {CommentParser.isESDoc} */
  it('return empty with non doc comment.', () => {
    const value = `\
this is not doc comment.
`;
    const comment = { type: 'CommentBlock', value: value };
    const tags = _CommentParser2.default.parse(comment);
    _assert2.default.equal(tags.length, 0);
  });

  /** @test {CommentParser.parse} */
  it('return empty with line comment.', () => {
    const value = `this is line comment.`;
    const comment = { type: 'CommentLine', value: value };
    const tags = _CommentParser2.default.parse(comment);
    _assert2.default.equal(tags.length, 0);
  });
});