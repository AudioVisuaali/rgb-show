export default {
  resetMocks: true,
  moduleDirectories: ["node_modules"],
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.ts?$": ["@swc/jest"],
  },
  globalSetup: "@rgb-show/jest/app/globalSetup.ts",
  testRegex: ".*/__tests__/.*.test.ts$",
  moduleFileExtensions: ["ts", "js", "node"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/lib/"],
};
