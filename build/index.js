'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stealCleanLoader = undefined;

var _loaderUtils = require('loader-utils');

var _schemaUtils = require('schema-utils');

var _schemaUtils2 = _interopRequireDefault(_schemaUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var optionsSchema = {
    type: 'object',
    properties: {
        startComment: {
            type: 'string'
        },
        endComment: {
            type: 'string'
        }
    }
};

var stealCleanLoader = exports.stealCleanLoader = function stealCleanLoader(content) {
    var options = this ? (0, _loaderUtils.getOptions)(this) : {};

    (0, _schemaUtils2.default)(optionsSchema, options, 'Steal clean loader');

    var startComment = options.startComment ? options.startComment : 'steal-remove-start';
    var endComment = options.endComment ? options.endComment : 'steal-remove-end';
    var regexp = new RegExp('(\\s?)//!(\\s?)' + startComment + '((.|\n)*?)//!(\\s?)' + endComment, 'gim');

    return content.replace(regexp, "");
};