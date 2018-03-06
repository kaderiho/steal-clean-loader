import stripCommentTags from '.';

test('Strip the comment tags: default params', () => {
    expect(stripCommentTags('//!steal-remove-start //!steal-remove-end')).toBe('');
});
