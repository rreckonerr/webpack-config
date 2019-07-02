var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: __dirname,

  entry: {
    main: './modules/cms/promo_pages/static/js/promo-page',
    lpCore: './modules/cms/landing_pages/static/scripts/core',
    lpEmc1: './modules/cms/landing_pages/static/scripts/emc1'
  },

  output: {
    path: path.resolve('./staticfiles/assets/bundles/'),
    filename: '[name]-[hash].js'
  },

  plugins: [
    new BundleTracker({ filename: './webpack-stats.json' }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
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
          MiniCssExtractPlugin.loader,
          'css-loader',
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
