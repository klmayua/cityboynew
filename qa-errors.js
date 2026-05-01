import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

const consoleErrors = [];
page.on('console', msg => {
  if (msg.type() === 'error') {
    consoleErrors.push(msg.text());
  }
});

page.on('pageerror', err => {
  consoleErrors.push(`PAGE ERROR: ${err.message}`);
});

const baseUrl = 'https://cityboy2026.vercel.app';

console.log('=== Console Error Check ===\n');

const pages = ['/', '/transparency', '/about'];

for (const path of pages) {
  consoleErrors.length = 0;
  console.log(`Testing: ${path}`);
  
  try {
    await page.goto(baseUrl + path, { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(2000);
    
    const root = await page.$('#root');
    const rootHtml = await root?.innerHTML();
    const rootLength = rootHtml?.length || 0;
    
    console.log(`  Root content length: ${rootLength}`);
    console.log(`  Console errors: ${consoleErrors.length}`);
    if (consoleErrors.length > 0) {
      consoleErrors.forEach(e => console.log(`    - ${e.slice(0, 200)}`));
    }
    console.log('');
  } catch (err) {
    console.log(`  ERROR: ${err.message}\n`);
  }
}

await browser.close();