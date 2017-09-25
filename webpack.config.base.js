const path    = require('path');
const webpack = require('webpack');

//------------------------------------------------------------------------------

module.exports = {
    target: 'web',
    context: path.resolve(__dirname, 'app'),
    module: {
        rules: [
            {
              test: /\.jsx?$/,
              use: ['babel-loader'],
              exclude: /node_modules/
            }, {
              test: /\.json$/,
              use: 'json-loader'
            },
            {
              test: /\.svg$/,
              use: 'file',
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: []
}