const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: { 
      'components': path.resolve(__dirname, 'src/components'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'uiKit': path.resolve(__dirname, 'src/uiKit'),
      'common': path.resolve(__dirname, 'src/common'),
      'src': path.resolve(__dirname, 'src/'),
    },
  };

  return config;
};