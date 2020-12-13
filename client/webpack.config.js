const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js',
    sourceMapFilename: 'index.js.map',
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      tags: path.resolve(__dirname, './src/components/Tags'),
      pages: path.resolve(__dirname, './src/pages'),
      utils: path.resolve(__dirname, './src/utils'),
      images: path.resolve(__dirname, './src/assets/images'),
      store: path.resolve(__dirname, './src/store'),
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    port: 9000,
    proxy: {
      '/api/': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
      },
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  corejs: 3,
                  targets: '> 1%',
                  useBuiltIns: 'usage',
                },
              ],
            ],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
  plugins: [
    new Dotenv({
      path:
        process.env === 'production'
          ? '../shared/env/production.env.dev'
          : '../shared/env/development.env',
    }),
  ],
};
