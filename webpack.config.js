const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'none',
    entry: path.resolve(__dirname, './sources/index.ts'),
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Akhremenko Grigorii',
            favicon: path.resolve(__dirname, './sources/media/favicon.png'),
            meta: {
                charset: 'UTF-8',
                author: 'Akhremenko Grigorii',
                robots: 'all',
                'Content-Security-Policy': {
                    'http-equiv': 'Content-Security-Policy',
                    content: 'default-src \'self\''
                }
            }
        })
    ]
};
