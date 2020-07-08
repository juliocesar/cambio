module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.js'],
  preset: 'react-native',
  transform: {
    '^.+\\.ttf$': '<rootDir>/jest/emptyTransform.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|expo-constants' +
      '|react-native-picker-select' +
      '|@unimodules' +
      ')/)',
  ],
}
