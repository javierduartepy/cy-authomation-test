import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 60000,
  reporter: "mochawesome",
  retries: {
    experimentalStrategy: "detect-flake-and-pass-on-threshold",
    experimentalOptions: {
      maxRetries: 2,
      passesRequired: 2,
    },
    openMode: true,
    runMode: true,
  },
  reporterOptions: {
    reporterDir: "reports/mochawesome-report",
    quiet: true,
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
  projectId: "vcq8ht",
});
