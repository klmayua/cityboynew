import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 720 });

console.log('=== Hero Alignment Screenshots ===\n');

await page.goto('https://cityboy2026.vercel.app/', { waitUntil: 'networkidle', timeout: 30000 });
await page.screenshot({ path: 'hero-after.png', fullPage: false });

console.log('Hero after fix: hero-after.png');

await browser.close();