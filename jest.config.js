import process from "process";

export default {
  testEnvironment: "jsdom",

  // ⚠️  setupTests.ts does not exist yet. Create it at src/setupTests.ts
  // before running Jest (e.g. import '@testing-library/jest-dom').
  // setupFilesAfterFramework: ["<rootDir>/src/setupTests.ts"],

  // ─── Mocking ──────────────────────────────────────────────────────────────
  //
  // IMPORTANT: Storybook uses the root __mocks__/ directory for its own
  // automocking system (sb.mock in .storybook/preview.ts). Those files are
  // ESModules-only JavaScript and may not be compatible with ts-jest.
  //
  // To prevent conflicts:
  //   1. automock is explicitly OFF — Jest will NOT automatically use
  //      __mocks__/ files unless you call jest.mock('module-name') yourself.
  //   2. If you need to mock a module in Jest tests, prefer jest.mock()
  //      inline in your test file rather than relying on __mocks__/ files
  //      that are shared with Storybook.
  //   3. If you do create Jest-specific mock files in __mocks__/, make sure
  //      they are CommonJS-compatible (use module.exports, not export) so
  //      ts-jest can process them — but note this WILL conflict with
  //      Storybook which requires ESModules.
  //   4. The safest approach for Jest-specific mocks is to use moduleNameMapper
  //      below to redirect imports to dedicated jest-mocks/ files.
  //
  automock: false,

  moduleNameMapper: {
    // CSS/style imports are stubbed out.
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",

    // Add Jest-specific module redirects here (do NOT point to __mocks__/).
    // Example:
    // "^../lib/session$": "<rootDir>/jest-mocks/session.js",
  },

  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.app.json" }],
  },
};
