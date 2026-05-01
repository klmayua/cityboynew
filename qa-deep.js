import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

const baseUrl = 'https://cityboy2026.vercel.app';

console.log('=== Deep Page Analysis ===\n');

// Test transparency page
console.log('Testing: /transparency');
await page.goto(baseUrl + '/transparency', { waitUntil: 'networkidle', timeout: 30000 });

const html = await page.content();

// Check what elements exist
const bodyClasses = await page.evaluate(() => document.body.className);
console.log('Body classes:', bodyClasses);

// Check for any fixed header
const anyFixed = await page.evaluate(() => {
  const els = document.querySelectorAll('*');
  let found = [];
  for (const el of els) {
    const style = window.getComputedStyle(el);
    if (style.position === 'fixed' && el.tagName !== 'SCRIPT') {
      found.push({ tag: el.tagName, classes: el.className?.slice(0, 50) });
    }
  }
  return found.slice(0, 10);
});
console.log('Fixed elements:', JSON.stringify(anyFixed, null, 2));

// Check page structure
const structure = await page.evaluate(() => {
  const body = document.body;
  return {
    directChildren: Array.from(body.children).map(c => c.tagName),
    hasLayoutWrapper: !!body.querySelector('[class*="min-h-screen"]'),
    hasNavbar: !!body.querySelector('header'),
    hasFooter: !!body.querySelector('footer'),
    totalFixed: document.querySelectorAll('*[style*="position: fixed"]').length
  };
});
console.log('Structure:', JSON.stringify(structure, null, 2));

await browser.close();