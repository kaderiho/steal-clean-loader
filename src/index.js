import { getOptions } from 'loader-utils';
import validateOptions  from 'schema-utils';

const optionsSchema = {
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

export const stealCleanLoader = function(content) {
    const options = this ? getOptions(this) : {};

    validateOptions(optionsSchema, options, 'Steal clean loader');

    const startComment = options.startComment ? options.startComment : 'steal-remove-start';
    const endComment = options.endComment ? options.endComment : 'steal-remove-end';
    const regexp = new RegExp(`(\\s?)//!(\\s?)${startComment}((.|\n)*?)//!(\\s?)${endComment}`, 'gim');

    return content.replace(regexp, "");
};
