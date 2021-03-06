const path = require('path');

// package.json as JS object
module.exports.pkg = require(path.join(__dirname, '../package.json'));

// note: for all paths, the base dir is ../
module.exports.PATHS = {
  srcDir: 'src',
  tsSrcFiles: 'src/**/*.ts',
  releaseAssets: ['assets/release/**/*', 'package.json', 'LICENSE'],
  exampleFiles: 'examples/**/*',
  jsFiles: ['gulpfile.js', 'gulp/*.js'],
  tsConfig: path.join(__dirname, '../tsconfig.json'),
  dist: {
    base: 'dist',
    cjs: 'dist',
    es6: 'dist/es6/',
    ts: 'dist/ts/',
    bundles: 'dist/bundles/',
  },
};
