const path = require('path');

const beforeBuild = require('./beforeBuild');
const webpackDevServer = require('./tasks/webpack_dev_server');

const DIST_DIR = 'dist';
const LIBS_DIR = 'libs';
const ASSETS_DIR = 'assets';
const CONFIGS_DIR = 'configs';
const WEBPACK_CONFIG = 'webpack.config.js';

const rootPath = path.resolve('');
const distPath = path.join(rootPath, DIST_DIR);
const libsPath = path.join(rootPath, LIBS_DIR);
const assetPath = path.join(rootPath, ASSETS_DIR);

const webpackConfig = require(path.join(rootPath, CONFIGS_DIR, WEBPACK_CONFIG));

async function npmStart() {
  try {
    // ビルド前処理
    await beforeBuild({
      distPath,
      libsPath,
      assetPath,
    });

    // webpack-dev-server 起動（js のコンパイルと開発サーバの立ち上げ）
    console.log('-- START: exec webpack-dev-server --');

    await webpackDevServer(webpackConfig).then(() => {
      console.log('-- COMPLETE: exec webpack-dev-server --');
    });
  } catch (err) {
    console.error(err);
  }
}

npmStart();
