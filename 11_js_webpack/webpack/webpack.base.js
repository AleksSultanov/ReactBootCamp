// https://webpack.js.org/concepts/#entry
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname,"../src/index.js"),
    output: {
        path: path.resolve(__dirname,"../dist"),
        filename: "bundle.js",
        clean: true 
    },
    // Подключаем webpack-dev-server 
    devServer: {
        static: path.resolve(__dirname, "../dist"),
        watchFiles: [path.resolve(__dirname, "../src", "*index.html")],
        hot: true,
        client: {
          overlay: false,
        },
    },    
    // Подключаем плагин для html
    plugins : [new HtmlWebpackPlugin({
        filename:  'index.html',
        template:  path.resolve(__dirname,'../src/index.html'),

        }),
        new MiniCssExtractPlugin({
            filename: "styles.css",
          }),
    ],
    // Подключаем загрузку css
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                  ],
            }

        ]
    } 

 

}