const fs = require("fs");
const path = require("path");

const reportDir = path.join(__dirname, "cypress/reports/html");
const oldPath = path.join(reportDir, "index.html");

const now = new Date();
const timestamp = now.toISOString().replace(/[:.]/g, "-"); // YYYY-MM-DDTHH-MM-SS
const newFilename = `tests-result-report-${timestamp}.html`;
const newPath = path.join(reportDir, newFilename);

fs.rename(oldPath, newPath, (err) => {
  if (err) throw err;
  console.log(`✅ Report renamed to ${newFilename}`);
});
