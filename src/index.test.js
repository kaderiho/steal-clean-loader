import { stealCleanLoader } from '.';

test('Strip the comment tags: default params', () => {
    expect(stealCleanLoader('//!steal-remove-start //!steal-remove-end')).toBe('');
});
