module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.ttf$': '<rootDir>/jest/emptyTransform.js',
  },
}
