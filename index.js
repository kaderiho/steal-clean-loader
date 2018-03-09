const getOptions = require('loader-utils').getOptions;
const validateOptions = require('schema-utils');

const optionsSchema = {
    type: 'object',
    properties: {
        startCommentTag: {
            type: 'string'
        },
        endCommentTag: {
            type: 'string'
        }
    }
};

module.exports = function(content) {
    const options = this ? getOptions(this) || {} : {};

    validateOptions(optionsSchema, options, 'Steal clean loader');

    const startCommentTag = options.startCommentTag ? options.startCommentTag : 'steal-remove-start';
    const endCommentTag = options.endCommentTag ? options.endCommentTag : 'steal-remove-end';
    const regexp = new RegExp(`(\\s?)//!(\\s?)${startCommentTag}((.|\n)*?)//!(\\s?)${endCommentTag}`, 'gim');

    return content.replace(regexp, "");
};
