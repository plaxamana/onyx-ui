module.exports = {
  verbose: true,
  reporters: ['default'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup.js'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/index.[jt]s',
    '!src/**/constants.[jt]s',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\][**/*\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.svg$': '<rootDir>/config/jest/svgTransform.js',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['js', 'ts', 'json', 'jsx', 'tsx'],
  testMatch: [
    '<rootDir>/src/components/**/*.test.[jt]s?(x)',
    '<rootDir>/src/utils/**/*.test.[jt]s?(x)',
  ],
  clearMocks: true,
};
