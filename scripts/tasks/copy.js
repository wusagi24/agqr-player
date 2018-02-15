'use strict';

// yarn add -D fs-extra
const fs = require('fs-extra');

/**
 * 指定ファイル・ディレクトリをコピーするタスク
 * @param {string} origin - コピー元ファイル・ディレクトリの絶対パス
 * @param {string} dist   - コピー先ファイル・ディレクトリの絶対パス
 * @return {Promise<void, Error>}
 */
function copy(origin, dist) {
  return Promise.resolve()
    .then(() => {
      fs.ensureDir(origin);
    })
    .then(() => {
      fs.copy(origin, dist);
    });
}

module.exports = copy;
