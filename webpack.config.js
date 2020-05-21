const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'none',
    entry: path.resolve(__dirname, './sources/index.tsx'),
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
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
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.WEBPACK_DEV_SERVER
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-react-loader'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
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
                    content: "default-src 'self'"
                }
            }
        })
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        headers: { 'Access-Control-Allow-Origin': '*' },
        port: 3000,
        hot: true,
        open: {
            app: ['chrome']
        }
    }
};
