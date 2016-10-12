import path from 'path';
import webpack from 'webpack';
import Copy from 'copy-webpack-plugin';

export default {
  entry: {
    index: ['./src/index.jsx'],
    entry: './dev/entry.jsx',
  },
  output: {
    publicPath: '/',
    sourcePath: ' ',
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
  },
  target: 'web',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, exclude: /node_modules/, loader: ['style', 'css?modules'] },
    ],
  },
  plugins: [
    new Copy([{ from: 'dev/index.html' }]),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devTool: 'inline-source-map',
  devServer: {
    contentBase: 'lib',
    port: 9000,
    inline: true,
    hot: true,
    colors: true,
  },
};
