const path = require('path');

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
};
