const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // {
            //     test: /\.(svg|eot|woff|woff2|ttf)$/,
            //     loader: 'file-loader',
            //     options: {
            //         outputPath: 'assets/font',
            //     },
            // },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/images',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),

        new FaviconsWebpackPlugin({
            logo: './src/images/logo.png',
            outputPath: 'assets/favicon',
            prefix: 'assets/favicon/',
        }),
    ],
};
