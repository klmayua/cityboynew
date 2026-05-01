import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 390, height: 844 });

console.log('=== Mobile Horizontal Scroll Debug ===\n');

await page.goto('https://cityboy2026.vercel.app/', { waitUntil: 'networkidle', timeout: 30000 });

const scrollInfo = await page.evaluate(() => {
  return {
    scrollWidth: document.body.scrollWidth,
    clientWidth: document.body.clientWidth,
    overflowX: getComputedStyle(document.body).overflowX,
    hasHorizontal: document.body.scrollWidth > document.body.clientWidth,
    allElements: Array.from(document.querySelectorAll('*'))
      .filter(el => {
        const style = getComputedStyle(el);
        return (parseInt(style.width) || 0) > document.body.clientWidth;
      })
      .slice(0, 5)
      .map(el => ({ tag: el.tagName, class: el.className?.slice(0, 30), width: el.getBoundingClientRect().width }))
  };
});

console.log('Scroll Info:', JSON.stringify(scrollInfo, null, 2));

await browser.close();