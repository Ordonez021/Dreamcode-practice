const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
    mode: 'production',

    /**
     * CONFIGURAR PARA LIMPIAR el dist para que no se repita 
     * a la hora de cambiar el nombre al archivo u otras cosas
     * */ 
    output:{ 
        clean:true,
        //nombres automaticos para los archivos
        filename: 'main.[contenthash].js'   
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/i,
                exclude: /main.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /main.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.png/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[hash][ext][query]'
                  }
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
            }
        ]
    },
    optimization: {
        minimizer: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            //template: 'src/index.html' (conserva todos los archivos html comentarios etiquetas,
            template: 'src/index.html',
            title: 'Mi Webpack Apk',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css'
        })
    
    ]
}