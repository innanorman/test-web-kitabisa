// export default {
//   preset: 'ts-jest',
//   testEnvironment: 'jest-environment-jsdom',
//   transform: {
//       "^.+\\.tsx?$": "ts-jest" 
//   // process `*.tsx` files with `ts-jest`
//   },
//   moduleNameMapper: {
//       '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/test/__ mocks __/fileMock.js',
//   },
//   rootDir: "src"

// }

export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    // process `*.tsx` files with `ts-jest`
  },
  rootDir: 'src',
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/test/__ mocks __/fileMock.js',
    '^@app/(.*)$': '<rootDir>/$1',
  },
};