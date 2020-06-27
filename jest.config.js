module.exports = {
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!src/**/*.stories.tsx',
    '!src/lib/graphql/**',
    '!src/lib/log/**',
    '!src/pages/**',
    '!src/lib/ssr.tsx',
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '@lib/(.*)': '<rootDir>/src/lib/$1',
    '@store/(.*)': '<rootDir>/src/store/$1',
    '@context/(.*)': '<rootDir>/src/context/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@pages/(.*)': '<rootDir>/src/pages/$1',
    '@config/(.*)': '<rootDir>/src/config/$1',
    '@config': '<rootDir>/src/config/index',
    '__generated__/(.*)': '<rootDir>/src/__generated__/$1',
    __mocks__: '<rootDir>/src/__mocks__/index',
  },
}
