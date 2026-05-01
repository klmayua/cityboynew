import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 720 });

await page.goto('https://cityboy2026.vercel.app/', { waitUntil: 'networkidle', timeout: 30000 });

// Get computed styles
const styles = await page.evaluate(() => {
  const heroSection = document.querySelector('section');
  const heroContainer = heroSection?.querySelector('.container');
  
  // Get all possible content elements
  const allDivs = heroSection?.querySelectorAll('div');
  const contentDivs = Array.from(allDivs || []).filter(d => {
    const rect = d.getBoundingClientRect();
    return rect.width > 100 && rect.height > 50;
  });
  
  return contentDivs.map((d, i) => ({
    index: i,
    class: d.className?.slice(0, 50),
    left: d.getBoundingClientRect().left,
    paddingLeft: getComputedStyle(d).paddingLeft,
    marginLeft: getComputedStyle(d).marginLeft,
  }));
});

console.log('=== Computed Styles ===');
styles.forEach(s => console.log(s));

await browser.close();