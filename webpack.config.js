const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'production',
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

    optimization: {
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          // `...`,
          new CssMinimizerPlugin(),
          new TerserPlugin(),
        ],
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