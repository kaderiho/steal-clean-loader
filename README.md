#Installing

npm install steal-clean-loader --save-dev

#Using

Add necessary rule into your webpack config.

By default the loader will take default params such as:

```
startCommentTag: 'steal-remove-start',
endCommentTag: 'steal-remove-end'
```

Running with the custom params:
```
module: {
    rules: [
    {
        test: /\.js$/,
        use: {
            loader: 'steal-clean-loader',
            options: {
                startCommentTag: 'customStartCommentTag'
                endCommentTag: 'customEndCommentTag'
            }   
        }
    }
```
