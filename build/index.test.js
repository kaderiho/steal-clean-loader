'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Strip the comment tags: default params', function () {
    expect((0, _2.default)('//!steal-remove-start //!steal-remove-end')).toBe('');
});