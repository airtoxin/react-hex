import Copy from 'copy-webpack-plugin';
import base from './webpack.config.babel';

export default {
  ...base,
  plugins: [
    new Copy([
      { from: 'dev/index.html' },
    ]),
  ],
  devServer: {
    ...base.devServer,
    port: 9999,
    hot: false,
  },
};
