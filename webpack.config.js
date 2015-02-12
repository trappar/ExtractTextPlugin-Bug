var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        test1: './src/test1.js',
        test2: './src/test2.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
        ]
    },
    output: {
        path: path.join(__dirname, 'output'),
        filename: '[name].js',
        chunkFilename: 'chunk/[name].js'
    },
    plugins: [
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        })
    ]
};