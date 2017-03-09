const path = require('path');

module.exports = {
    entry: {
        "./functions/answerquestion": "./functions/answerquestion.js",
        "./functions/getquestion": "./functions/getquestion.js"
    },
    target: 'node',
    module: {
        loaders: [
            {test: /\.json$/, loader: 'json'},
        ]
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js'
    },
};