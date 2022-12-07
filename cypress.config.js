const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  viewportWidth: 1280,
  viewportHeight: 1024,
  waitForAnimations: false,
  pageLoadTimeout:30000,
  animationDistanceThreshold: 50,
  e2e: {
    experimentalStudio: true,

    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    },
 
  }
});
