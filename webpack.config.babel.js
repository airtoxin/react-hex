import path from 'path';
import webpack from 'webpack';
import Copy from 'copy-webpack-plugin';

const env = process.env.NODE_ENV;

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
    new Copy([{ from: 'dev/index.html' }]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
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

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false,
      },
    })
  );
}

export default config;
