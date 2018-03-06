const stealCleanLoader = require('.');

test('Strip the comment tags: default params', () => {
    expect(stealCleanLoader('//!steal-remove-start //!steal-remove-end')).toBe('');
});

test('Strip the comment tags: some custom string', () => {
    expect(stealCleanLoader('//!steal-remove-start Some custom string of code there //!steal-remove-end')).toBe('');
});
