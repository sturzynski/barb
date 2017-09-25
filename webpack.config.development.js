const webpack     = require('webpack');
const { resolve } = require('path');

const base_config = require('./webpack.config.base');

//------------------------------------------------------------------------------

const dev_config = {
    ...base_config,

    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:9000',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        './index.js'
    ],
    output: {
        ...base_config.output,
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 9000,
        hot: true,
        contentBase: resolve(__dirname, 'app'),
        publicPath:  '/',
        historyApiFallback:
        {
            rewrites: [
                { from: /^\/$/, to: '/app.html' },
                { from: /./, to: '/app.html' }
            ]
        }
    },
    plugins: [
        ...base_config.plugins,
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        ...base_config.module,
        rules: [
            ...base_config.module.rules,
            {
                test:    /\.css$/,
                exclude: /node_module/,
                use:     [ 'style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', ],
            },
            {
                test:    /\.css$/,
                include: /node_module/,
                use:    [ 'style-loader', 'css-loader', ],
            }
        ]
    }
}

//------------------------------------------------------------------------------

module.exports = dev_config;