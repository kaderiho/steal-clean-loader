'use strict';

var getOptions = require('loader-utils').getOptions;
var validateOptions = require('schema-utils');

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

module.exports = function (content) {
    var options = this ? getOptions(this) : {};

    validateOptions(optionsSchema, options, 'Steal clean loader');

    var startComment = options.startComment ? options.startComment : 'steal-remove-start';
    var endComment = options.endComment ? options.endComment : 'steal-remove-end';
    var regexp = new RegExp('(\\s?)//!(\\s?)' + startComment + '((.|\n)*?)//!(\\s?)' + endComment, 'gim');

    return content.replace(regexp, "");
};