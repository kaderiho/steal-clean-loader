'use strict';

var stealCleanLoader = require('.');

test('Strip the comment tags: default params', function () {
    expect(stealCleanLoader('//!steal-remove-start //!steal-remove-end')).toBe('');
});