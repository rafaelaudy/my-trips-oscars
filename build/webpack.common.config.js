const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',

    entry: [
        './src/js/index.jsx'
    ],

    output: {
        path: './dist',
        filename: '[hash]/bundle.min.js'
    },

    resolve: {
        extensions: ['', '.webpack.js', '.js', '.jsx'],
        root: [ './src' ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new ExtractTextPlugin('[hash]/bundle.min.css')
    ],

    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap') },
            { test: /\.jpg$/, loader: "file-loader" }
        ]
    },

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};
