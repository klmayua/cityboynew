import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 720 });

await page.goto('https://cityboy2026.vercel.app/', { waitUntil: 'networkidle', timeout: 30000 });

// Measure positions
const measurements = await page.evaluate(() => {
  const logo = document.querySelector('header a');
  const heroBadge = document.querySelector('.hero-flag-wave')?.parentElement?.nextElementSibling?.querySelector('div > div');
  const navbar = document.querySelector('header');
  
  return {
    navbarLeft: navbar?.getBoundingClientRect().left,
    navbarWidth: navbar?.getBoundingClientRect().width,
    logoLeft: logo?.getBoundingClientRect().left,
    heroContainerLeft: document.querySelector('.container')?.getBoundingClientRect().left,
    viewportWidth: window.innerWidth
  };
});

console.log('=== Measurements ===');
console.log(JSON.stringify(measurements, null, 2));

await page.screenshot({ path: 'measure.png', fullPage: false });
console.log('Screenshot: measure.png');

await browser.close();