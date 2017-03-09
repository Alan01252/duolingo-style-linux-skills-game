module.exports = {
    entry: './handler.js',
    target: 'node',
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json' },
        ]
    }
};