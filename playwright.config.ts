import { defineConfig, devices } from '@playwright/test';

const baseUse = {
  headless: true,
  viewport: { width: 1280, height: 720 },
  ignoreHTTPSErrors: true,
  video: 'on-first-retry' as const,
};

export default defineConfig({
  fullyParallel: true,
  workers: process.env.CI ? 2 : 1,

  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        ...devices['Desktop Chrome'],
        ...baseUse,
      },
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        ...devices['Desktop Firefox'],
        ...baseUse,
      },
    },
    {
      name: 'safari',
      use: {
        browserName: 'webkit',
        ...devices['Desktop Safari'],
        ...baseUse,
      },
    },
  ],

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
});
