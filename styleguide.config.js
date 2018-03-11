'use strict';

const path = require('path');

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          use: [
            require.resolve('style-loader'),
            {
              loader: require.resolve('css-loader'),
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:10]',
              },
            },
            {
              loader: require.resolve('postcss-loader'),
              options: {
                config: {
                  path: './config/postcss.config.js',
                },
              },
            },
          ],
        },
      ]
    }
  },
  styleguideDir: path.join(__dirname, 'www/styleguide'),
}
