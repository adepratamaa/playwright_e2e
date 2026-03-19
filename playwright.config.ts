import { PlaywrightTestConfig } from 'playwright/test';

const config: PlaywrightTestConfig = {
  fullyParallel: true,
  workers: process.env.CI ? 2 : 1,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
  },
  reporter: [
    ['html'],
    [
      'playwright-smart-reporter',
      {
        outputFolder: 'my-report',
        outputFile: 'smart-report.html',
        historyFile: 'test-history.json',
        maxHistoryRuns: 10,
      },
    ],
  ],
};

export default config;
