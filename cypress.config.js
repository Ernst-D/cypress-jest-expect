const { defineConfig } = require("cypress");
const { _expect } = require("./src");

module.exports = defineConfig({
  e2e: {
    // ernst: videos and screenshots
    video: false,
    screenshotOnRunFailure:false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task",{
          _expect({matcher ,actual, expected}){
            // _expect({matcher: matcher, actual: actual, expected: expected})
            return _expect({matcher: matcher, actual: actual, expected: expected});
          }
      })
    },
  },
});
