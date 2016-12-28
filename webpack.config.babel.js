import path from 'path';

const config = {
  entry: './src/index.jsx',
  output: {
    publicPath: '/',
    sourcePath: ' ',
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  target: 'web',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
    ],
  },
  plugins: [],
  node: {
    Buffer: false,
  },
  devTool: 'inline-source-map',
};

export default config;
