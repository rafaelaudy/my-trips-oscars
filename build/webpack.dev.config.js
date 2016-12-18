const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common.config');

module.exports = webpackMerge(commonConfig, {
   output: {
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new ExtractTextPlugin('bundle.css')
    ],
});
