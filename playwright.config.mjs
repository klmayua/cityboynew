import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 120000,
  use: {
    baseURL: 'https://cityboy2026.vercel.app',
    headless: true,
  },
});