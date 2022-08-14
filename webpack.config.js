const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: { 
        main: './src/index.js',
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].[contenthash].js', //[name] depends on the property name of the entry point
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[name].[hash][ext][query]',
        clean: true, //cleans up previous cache files that have a diff hash
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].css"}),
        new HtmlWebpackPlugin({
            title: 'Drink House',
            template: './src/index.html',
            inject: 'body',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader',],
            },
        ],
    },
};