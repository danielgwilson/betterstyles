let path = require('path');
const resources = require('../../scripts/tasks/webpack-resources');

const IS_PRODUCTION = process.argv.indexOf('--production') > -1;

module.exports = resources.createConfig(
  'helloworld',
  IS_PRODUCTION,
  {
    entry: './lib/index.js',

    output: {
      path:path.resolve(__dirname, 'lib'),
      filename: 'en-us_web/bundle.js'
    }
  }
);