const path = require('path');
// const {CleanWebpackPlugin} =require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',//прложение находится в разработке
    entry: ["@babel/polyfill","./src/index.jsx"], //точка входа вприложение
    output: {//куда будет вебпак собирать проекты
        path: path.resolve(__dirname, 'dist'),//пкуть к сборке
        filename: "[name].[hash].js",//название всех джс файлов

    },
    devServer: { //нстройка дев сервера
        port: 3000
    },
    plugins: [//нстройска плагинов
        new HtmlWebpackPlugin({ template: "./src/index.html" })
    ],
    module: { //испорт наших стилей работа всех лоадеров
        rules: [
            {
                test: /\.(css|less)$/,
                //подключение лоадеров
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ["file-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env']
                    }
                }
            }
        ]
    }

}