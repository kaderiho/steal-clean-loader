const stealCleanLoader = require('.');

test('Strip the comment tags: default params', () => {
    expect(stealCleanLoader('//!steal-remove-start Some custom string of code there //!steal-remove-end')).toBe('');
});

test('Strip the comment tags: defined params through the config', () => {
    const predefinedOptions = {
        startCommentTag: 'someStartCommentTag',
        endCommentTag: 'someEndCommentTag',
    };

    const predefinedStealCleanLoader = stealCleanLoader.bind({
        query: predefinedOptions
    });

    expect(predefinedStealCleanLoader(`//!${predefinedOptions.startCommentTag} Some string of code //!${predefinedOptions.endCommentTag}`)).toBe('');
});
