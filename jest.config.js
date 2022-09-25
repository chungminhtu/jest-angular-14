module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/'
  ],
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'json', 'text'],
  coverageDirectory: 'tests/coverage',
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  snapshotResolver: './tests/snapshotResolver.js',
  coverageThreshold: {
    global: {
      lines: 90
    }
  }
};
