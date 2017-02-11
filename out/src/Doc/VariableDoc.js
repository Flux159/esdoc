'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AbstractDoc = require('./AbstractDoc.js');

var _AbstractDoc2 = _interopRequireDefault(_AbstractDoc);

var _ParamParser = require('../Parser/ParamParser.js');

var _ParamParser2 = _interopRequireDefault(_ParamParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Doc Class from Variable Declaration AST node.
 */
class VariableDoc extends _AbstractDoc2.default {
  /** specify ``variable`` to kind. */
  _$kind() {
    super._$kind();
    this._value.kind = 'variable';
  }

  /** set name by using self node. */
  _$name() {
    super._$name();

    const type = this._node.declarations[0].id.type;
    switch (type) {
      case 'Identifier':
        this._value.name = this._node.declarations[0].id.name;
        break;
      case 'ObjectPattern':
        // TODO: optimize for multi variables.
        // e.g. export const {a, b} = obj
        this._value.name = this._node.declarations[0].id.properties[0].key.name;
        break;
      case 'ArrayPattern':
        // TODO: optimize for multi variables.
        // e.g. export cont [a, b] = arr
        this._value.name = this._node.declarations[0].id.elements.find(v => v).name;
        break;
      default:
        throw new Error(`unknown declarations type: ${type}`);
    }
  }

  /** set memberof by using file path. */
  _$memberof() {
    super._$memberof();
    this._value.memberof = this._pathResolver.filePath;
  }

  /** if @type is not exists, guess type by using self node. */
  _$type() {
    super._$type();
    if (this._value.type) return;

    if (this._node.declarations[0].init.type === 'NewExpression') {
      const className = this._node.declarations[0].init.callee.name;
      let longname = this._findClassLongname(className);
      if (!longname) longname = '*';
      this._value.type = { types: [longname] };
    } else {
      this._value.type = _ParamParser2.default.guessType(this._node.declarations[0].init);
    }
  }
}
exports.default = VariableDoc;