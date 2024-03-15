const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  module: {
    rules: [
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
  plugins: [
    new HtmlWebpackPlugin({
        //template: 'src/index.html' (conserva todos los archivos html comentarios etiquetas,
        template: 'index.html',
        title: 'Mi Webpack Apk',
        filename: 'index.html'
    }),
  ],
  mode: 'development'
};