const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './index.html',
  filename: './index.html'
});

module.exports = {
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  context: path.resolve(__dirname, 'src'),
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: true,
    port: 3000,
    compress: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js$/,
        exclude: /node_modules/,
        parallel: true,
        cache: true,
        uglifyOptions: {
          compress: {
            booleans: false,
            collapse_vars: false,
            comparisons: false,
            hoist_funs: false,
            hoist_props: false,
            hoist_vars: false,
            if_return: false,
            inline: false,
            join_vars: false,
            keep_infinity: true,
            loops: false,
            negate_iife: false,
            properties: false,
            reduce_funcs: false,
            reduce_vars: false,
            sequences: false,
            side_effects: false,
            switches: false,
            top_retain: false,
            toplevel: false,
            typeofs: false,
            unused: false,

            // Switch off all types of compression except those needed to convince
            // react-devtools that we're using a production build
            conditionals: true,
            dead_code: true,
            evaluate: true
          },
          mangle: true
        }
      })
    ]
  },
  plugins: [htmlWebpackPlugin]
};
