const { defineConfig } = require("cypress");
const { expect } = require("expect")

module.exports = defineConfig({
  e2e: {
    // ernst: videos and screenshots
    video: false,
    screenshotOnRunFailure:false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task",{
          _expect({actual, expected}){
            console.debug(`actual: ${actual}`)
            console.debug(`expected: ${expected}`)
            expect(actual).toEqual(expected)

            return null;
          }
      })
    },
  },
});
