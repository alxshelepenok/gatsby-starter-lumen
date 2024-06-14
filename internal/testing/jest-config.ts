import type { Config } from "@jest/types";

import swc from "./swc-config";

const jestConfig: Config.InitialOptions = {
  testEnvironment: "jsdom",
  rootDir: "../../",
  moduleNameMapper: {
    "@/utils/([^\\.]*)$": ["<rootDir>/src/utils/$1"],
    "@/pages/([^\\.]*)$": ["<rootDir>/src/pages/$1"],
    "@/hooks/([^\\.]*)$": ["<rootDir>/src/hooks/$1"],
    "@/mocks": ["<rootDir>/internal/testing/__mocks__"],
    "@/scss/([^\\.]*)$": ["<rootDir>/src/assets/scss/$1"],
    "@/constants/([^\\.]*)$": ["<rootDir>/src/constants/$1"],
    "@/images/([^\\.]*)$": ["<rootDir>/src/assets/images/$1"],
    "@/components/([^\\.]*)$": ["<rootDir>/src/components/$1"],
    "@/constants": ["<rootDir>/src/constants"],
    "@/hooks": ["<rootDir>/src/hooks"],
    "@/utils": ["<rootDir>/src/utils"],
    ".+\\.(css|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "identity-obj-proxy",
    "^gatsby-core-utils/(.*)$": "gatsby-core-utils/dist/$1",
    "^gatsby-plugin-utils/(.*)$": [
      "gatsby-plugin-utils/dist/$1",
      "gatsby-plugin-utils/$1",
    ],
  },
  transform: { "^.+\\.[jt]sx?$": ["@swc/jest", swc] },
  globalSetup: "<rootDir>/internal/testing/jest-global.ts",
  setupFiles: ["<rootDir>/internal/testing/jest-setup.ts"],
  setupFilesAfterEnv: ["<rootDir>/internal/testing/jest-after-env.ts"],
  testPathIgnorePatterns: ["node_modules", "\\.cache", "<rootDir>.*/public"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby|gatsby-script)/)"],
};

export default jestConfig;
