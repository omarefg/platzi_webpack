const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const port = '3025'

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/main.js')
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: `http://localhost:${port}/`,
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    devServer: {
        port: port,
        hot: true,
        contentBase: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css|postcss$/,
                use: [
                    'style-loader',
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
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
    ]
}