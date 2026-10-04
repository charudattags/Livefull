/** @type {import('jest').Config} */
module.exports = {
  projects: [
    {
      // Pure TypeScript: engine, shared code, scripts. No React Native.
      displayName: 'engine',
      preset: 'ts-jest',
      testEnvironment: 'node',
      testMatch: [
        '<rootDir>/src/**/*.test.ts',
        '<rootDir>/shared/**/*.test.ts',
        '<rootDir>/scripts/**/*.test.ts',
      ],
    },
    {
      // Screens and components, rendered with React Native Testing Library.
      displayName: 'app',
      preset: 'jest-expo',
      testMatch: ['<rootDir>/src/**/*.test.tsx'],
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.css$': '<rootDir>/src/test-support/empty-module.ts',
      },
    },
  ],
};
