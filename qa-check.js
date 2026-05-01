import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

const consoleMessages = [];
page.on('console', msg => {
  if (msg.type() === 'error' || msg.type() === 'warning') {
    consoleMessages.push(`[${msg.type()}] ${msg.text()}`);
  }
});

const baseUrl = 'https://cityboy2026.vercel.app';

console.log('=== Testing Layout Wrapper via Console Errors ===\n');

const testPages = ['/transparency', '/project-nigeria', '/about', '/leadership'];

for (const path of testPages) {
  consoleMessages.length = 0;
  const url = baseUrl + path;
  console.log(`Testing: ${url}`);
  
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    
    // Check for Layout wrapper
    const hasLayoutWrapper = await page.evaluate(() => {
      const body = document.body;
      const hasNavbar = !!body.querySelector('header.fixed');
      const hasFooter = !!body.querySelector('footer');
      const hasMobileDock = !!body.querySelector('nav.fixed.bottom-0');
      return { hasNavbar, hasFooter, hasMobileDock };
    });
    
    console.log(`  Layout elements:`, hasLayoutWrapper);
    
    if (consoleMessages.length > 0) {
      console.log(`  Console errors:`);
      consoleMessages.forEach(m => console.log(`    ${m}`));
    } else {
      console.log(`  No console errors`);
    }
    
    console.log('  ---\n');
    
  } catch (err) {
    console.log(`  ERROR: ${err.message}\n`);
  }
}

await browser.close();
console.log('Done');