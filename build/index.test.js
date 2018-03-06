'use strict';

var _ = require('.');

test('Strip the comment tags: default params', function () {
    expect((0, _.stealCleanLoader)('//!steal-remove-start //!steal-remove-end')).toBe('');
});