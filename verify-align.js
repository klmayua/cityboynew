import { chromium } from 'playwright';

const delay = ms => new Promise(r => setTimeout(r, ms));

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 720 });

console.log('Waiting for Vercel deploy...');
await delay(60000); // Wait 60s for deploy

await page.goto('https://cityboy2026.vercel.app/', { waitUntil: 'networkidle', timeout: 30000 });
await delay(2000);

const m = await page.evaluate(() => {
  const header = document.querySelector('header');
  const logo = header?.querySelector('a');
  const heroSection = document.querySelector('section');
  const heroContentWrapper = heroSection?.children?.[1];
  
  return {
    logoLeft: logo?.getBoundingClientRect()?.left,
    heroWrapperLeft: heroContentWrapper?.getBoundingClientRect()?.left,
  };
});

console.log('=== After Deploy ===');
console.log('Logo left:', m.logoLeft);
console.log('Hero wrapper left:', m.heroWrapperLeft);

await browser.close();