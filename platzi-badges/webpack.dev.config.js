const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const port = '3025'

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: `http://localhost:${port}/`,
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    devServer: {
        port,
        hot: true,
        contentBase: path.resolve(__dirname, 'dist')
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
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/'
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ]
}