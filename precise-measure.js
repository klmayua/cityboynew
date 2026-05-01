import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 720 });

await page.goto('https://cityboy2026.vercel.app/', { waitUntil: 'networkidle', timeout: 30000 });

// Wait for page to fully load
await page.waitForTimeout(2000);

const measurements = await page.evaluate(() => {
  // Navbar elements
  const header = document.querySelector('header');
  const headerContainer = header?.querySelector('.container, [class*="max-w"]');
  const logo = header?.querySelector('a');
  
  // Get all text elements to find actual content start
  const heroSection = document.querySelector('section');
  const heroContent = heroSection?.querySelector('div.absolute.inset-0 + div') || heroSection?.querySelector(':scope > div:nth-child(2)');
  
  return {
    // Navbar
    headerRect: header?.getBoundingClientRect(),
    headerContainerLeft: headerContainer?.getBoundingClientRect()?.left,
    logoText: logo?.textContent?.trim(),
    logoLeft: logo?.getBoundingClientRect()?.left,
    logoRight: logo?.getBoundingClientRect()?.right,
    
    // Hero
    heroSectionTop: heroSection?.getBoundingClientRect()?.top,
    heroContentLeft: heroContent?.getBoundingClientRect()?.left,
    heroContentRight: heroContent?.getBoundingClientRect()?.right,
    
    // Viewport
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
  };
});

console.log('=== Precise Measurements ===');
console.log('Viewport:', measurements.viewportWidth, 'x', measurements.viewportHeight);
console.log('Navbar container left:', measurements.headerContainerLeft);
console.log('Logo text:', measurements.logoText, '| left:', measurements.logoLeft, '| right:', measurements.logoRight);
console.log('Hero content left:', measurements.heroContentLeft, '| right:', measurements.heroContentRight);
console.log('Difference (hero - logo):', measurements.heroContentLeft - measurements.logoLeft);

await page.screenshot({ path: 'precise-measure.png', fullPage: false });
console.log('Screenshot saved');

await browser.close();