const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    /*"video": false,
    "defaultCommandTimeout": 5000,
    "dpageLoadTimeout": 10000,
    "ignoreTestFiles": ["*.js" , ".md"],
*/
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
