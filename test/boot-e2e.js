import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import Mocha from 'mocha';
import path from 'path';
import readdir from 'recursive-readdir';
import config from '../webpack.test-config.babel';

const compilers = webpack(config);

compilers.plugin('done', () => {
  const mocha = new Mocha({
    timeout: 100000, // 100 sec
  });

  readdir(path.resolve(__dirname, 'e2e'), (error, files) => {
    if (error) {
      process.exit(1);
    }

    files.forEach(f => mocha.addFile(f));
    mocha.run(process.exit);
  });
});

const server = new WebpackDevServer(compilers, config.devServer);
server.listen(config.devServer.port || 9999, config.devServer.host || 'localhost');
