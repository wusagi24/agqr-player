const path = require('path');

const emptyDir = require('./empty_dir');
const copyDir = require('./copy');

async function beforeBuild(paths) {
  const { distPath, libsPath, assetPath } = paths;

  console.log('=== START: before build process ===');

  try {
    // デプロイ先の空ディレクトリの作成（既に中身がある場合は削除）
    console.log('-- START: make dist dir --');
    console.log(`target dir: ${distPath}`);

    await emptyDir(distPath).then(() => {
      console.log('-- COMPLETE: make dist dir --');
    });

    // libs ディレクトリをデプロイ先へコピー
    console.log('-- START: copy libs dir --');

    const libsDir = libsPath.split(path.sep).pop();
    const libsDistPath = path.join(distPath, libsDir);

    console.log(`origin dir: ${libsPath}`);
    console.log(`dist dir: ${libsDistPath}`);

    await copyDir(libsPath, libsDistPath).then(() => {
      console.log('-- COMPLETE: copy libs dir --');
    });

    // assets ディレクトリをデプロイ先へコピー
    console.log('-- START: copy assets dir --');

    const assetsDir = assetPath.split(path.sep).pop();
    const assetsDistPath = path.join(distPath, assetsDir);

    console.log(`origin dir: ${assetPath}`);
    console.log(`dist dir: ${assetsDistPath}`);

    await copyDir(assetPath, assetsDistPath).then(() => {
      console.log('-- COMPLETE: copy assets dir --');
    });

    console.log('=== COMPLETE: before build process ===\n');
  } catch (err) {
    throw err;
  }
}

module.exports = beforeBuild;
