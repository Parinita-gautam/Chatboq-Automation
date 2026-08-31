const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  globalSetup: require.resolve('./global-setup'),

  timeout: 170000,

  use: {
    baseURL: 'https://stagingv2.chatboq.com',

    headless: process.env.CHATBOQ_HEADLESS === 'true',
    viewport: {
            width: 1366,
            height: 620,
    },
    actionTimeout: 7000,

    launchOptions: {
      slowMo: 2000,
    },

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    
    storageState: './.auth/storage-state.json',
  },

  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
      },
    },
  ],
});
