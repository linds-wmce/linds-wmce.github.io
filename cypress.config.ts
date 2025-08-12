import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    supportFile: 'tests/acceptance/cypress/support/e2e.ts',
    specPattern: 'tests/acceptance/cypress/e2e/**/*.cy.{js,ts}',
    chromeWebSecurity: false,
    video: false,
  },
});
