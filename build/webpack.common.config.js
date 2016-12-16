const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.jsx'
    ],

    output: {
        path: './dist',
        filename: '[hash]/bundle.min.js'
    },

    resolve: {
        extensions: ['', '.webpack.js', '.js', '.jsx'],
        root: [
			'./src'
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],

    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: ['node_modules'], loader: 'babel-loader' }
        ]
    },

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};
