import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 60000,
  video: true,
  videosFolder: "cypress/videos",
  trashAssetsBeforeRuns: true,
  reporter: "cypress-mochawesome-reporter",
  screenshotOnRunFailure: true,
  retries: {
    experimentalStrategy: "detect-flake-and-pass-on-threshold",
    experimentalOptions: {
      maxRetries: 2,
      passesRequired: 1,
    },
    openMode: true,
    runMode: true,
  },
  reporterOptions: {
    charts: true,
    reportPageTitle: "Cypress Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
    reportDir: "cypress/reports/html",
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
    env: {
      grepFilterSpecs: true,
      grepOmitFiltered: true,
    },
    specPattern: "cypress/e2e/**/*.cy.ts",
  },
});
