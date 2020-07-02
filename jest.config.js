module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.js'],
  preset: 'react-native',
  transform: {
    '^.+\\.ttf$': '<rootDir>/jest/emptyTransform.js',
  },
}
