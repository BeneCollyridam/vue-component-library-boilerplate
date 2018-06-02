module.exports = {
  testMatch: ['**/(*.)unit.js'],
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: require('./aliases.config').jest,
  snapshotSerializers: ['jest-serializer-vue'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!**/node_modules/**',
    '!src/docs.js',
    '!src/lib.js',
    '!src/app.vue',
    '!src/components/index.js',
    '!src/router/index.js',
    '!src/router/routes.js',
  ],
}
