const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/home.js'),
        contact: path.resolve(__dirname, 'src/js/contact.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 90000
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack-dev-server',
            template: path.resolve(__dirname, 'home.html')
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./modules-manifest.json')
        })
    ]
}