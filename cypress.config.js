// const { defineConfig } = require("cypress");
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
// const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: "https://opensource-demo.orangehrmlive.com",
//     async setupNodeEvents(on, config) {
//       const bundler = createBundler({
//         plugins: [createEsbuildPlugin(config)],
//       });

//       on("file:preprocessor", bundler);
//       await addCucumberPreprocessorPlugin(on, config);

//       return config;
//     },

//     specPattern: "cypress/e2e/**/*.feature", // allow running .feature files
//     supportFile: "cypress/support/e2e.js",
//   },
// });

const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      mochawesome(on);
      return config;
    },
    // chromeWebSecurity: false,
    reporter: "cypress-mochawesome-reporter", // to generate HTML report
    defaultCommandTimeout: 10000,
    watchForFileChanges: false,
    screenshotOnRunFailure: true,
    video: true,
    specPattern: "cypress/e2e/**/*.feature", // allow running .feature files
    supportFile: "cypress/support/e2e.js",
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
  },
});
