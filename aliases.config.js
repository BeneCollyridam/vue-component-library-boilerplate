const path = require('path');

function resolveSrc(_path) {
  return path.join(__dirname, _path);
};

const aliases = {
  'vue$': 'vue/dist/vue.esm.js',
  '@src': 'src',
  '@router': 'src/router',
  '@views': 'src/router/views',
  '@components': 'src/components',
  '@assets': 'src/assets',
  '@styles': 'src/styles/lib.scss',
};

module.exports = {
  jest: {},
};

for (const alias in aliases) {
  module.exports.jest['^' + alias + '/(.*)$'] =
    '<rootDir>/' + aliases[alias] + '/$1';
};
