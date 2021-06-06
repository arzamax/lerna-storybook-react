module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>packages'],
  testMatch: ['**/*.test.+(ts|tsx)'],
  moduleNameMapper: {
    '^.+\\.(svg)$': '<rootDir>/jest/mocks/svgMock.tsx',
    '^.+\\.(png|jpg)$': '<rootDir>/jest/mocks/fileMock.tsx',
    '@example/(.+)$': '<rootDir>packages/$1/src',
  },
  modulePathIgnorePatterns: ['dist'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
};
