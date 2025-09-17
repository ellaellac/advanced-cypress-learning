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

      registerWorkshopScripts(on)

      // In cypress project setting - e.g.: 
      // env: {
      // version: 'staging',
      // baseUrl: 'https://staging.trello.com',
      // },
      const version = config.env.version || 'local' // from terminal npx cypress open --env version="prod"
                                                    // add "local" as sometimes use npx cypress open as default
      config.env = require(`./cypress/config/${version}.json`)

      config.baseUrl = config.env.baseUrl
      
      return config
    },
    baseUrl: 'http://localhost:3000'
  },
});
