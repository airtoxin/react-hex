import path from 'path';
import webpack from 'webpack';
import Copy from 'copy-webpack-plugin';

const pluginsInDevelopEnv = [
  new Copy([{ from: 'dev/index.html' }]),
  new webpack.HotModuleReplacementPlugin(),
];

const config = {
  entry: {
    index: ['./src/index.jsx'],
    entry: './dev/entry.jsx',
  },
  output: {
    publicPath: '/',
    sourcePath: ' ',
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'umd',
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
    new webpack.optimize.OccurrenceOrderPlugin(),
  ].concat(process.env.NODE_ENV !== 'production' ? pluginsInDevelopEnv : []),
  node: {
    Buffer: false,
  },
  devTool: 'inline-source-map',
  devServer: {
    contentBase: 'lib',
    port: 9000,
    inline: true,
    hot: true,
    colors: true,
  },
};

export default config;
