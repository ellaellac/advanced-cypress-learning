import { defineConfig } from "cypress";
import { registerWorkshopScripts } from "./workshop-scripts/workshopScripts";
import { seedDatabase } from "./seedDatabase.js"

export default defineConfig({
  viewportHeight: 550,
  viewportWidth: 660,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        seedDatabase
      })

      if (config.env.version === 'prod') {
        config.baseUrl='https://trello.com'
      }
      registerWorkshopScripts(on)
      // const version = config.env.version || 'local'

      // config.env = require(`./cypress/config/${version}.json`)

      // config.baseUrl = config.env.baseUrl
      
      return config
    },
    baseUrl: 'http://localhost:3000'
  },
});
