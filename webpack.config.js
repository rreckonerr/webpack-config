var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
// ! Dev only
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,

  entry: {
    //! Dev only
    main: './modules/one',
    lpCore: './modules/two',
    lpEmc1: './modules/three'
    // main: './modules/cms/promo_pages/static/js/promo-page',
    // lpCore: './modules/cms/landing_pages/static/scripts/core',
    // lpEmc1: './modules/cms/landing_pages/static/scripts/emc1'
  },

  output: {
    //! Dev only
    path: path.resolve('./dist'),
    // path: path.resolve('./staticfiles/assets/bundles/'),
    filename: '[name]-[hash].js'
  },

  plugins: [
    new BundleTracker({ filename: './webpack-stats.json' }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    //! Dev only
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          //* Provides css chunks
          MiniCssExtractPlugin.loader,
          'css-loader',

          //* Provides autoprefixer
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  }
};
