import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

const baseUrl = 'https://cityboy2026.vercel.app';
const pages = ['/', '/transparency', '/project-nigeria', '/about', '/leadership', '/community'];

console.log('Starting QA screenshots...\n');

for (const path of pages) {
  const url = baseUrl + path;
  console.log(`Testing: ${url}`);
  
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    
    const viewport = page.viewportSize();
    console.log(`  Viewport: ${viewport?.width}x${viewport?.height}`);
    
    const navbar = await page.$('header.fixed');
    console.log(`  Navbar: ${navbar ? 'FOUND' : 'MISSING'}`);
    
    const footer = await page.$('footer');
    console.log(`  Footer: ${footer ? 'FOUND' : 'MISSING'}`);
    
    const mobileDock = await page.$('nav.fixed.bottom-0');
    console.log(`  MobileDock: ${mobileDock ? 'FOUND' : 'MISSING'}`);
    
    const filename = path.replace('/', '_') || 'home';
    await page.screenshot({ path: `qa-${filename}.png`, fullPage: true });
    console.log(`  Screenshot: qa-${filename}.png`);
    console.log('  ---');
    
  } catch (err) {
    console.log(`  ERROR: ${err.message}`);
  }
}

console.log('\n=== Mobile Viewport Test ===');
await page.setViewportSize({ width: 390, height: 844 });

for (const path of ['/', '/community']) {
  const url = baseUrl + path;
  console.log(`Testing mobile: ${url}`);
  
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const clientWidth = await page.evaluate(() => document.body.clientWidth);
    const hasHorizontalScroll = scrollWidth > clientWidth;
    console.log(`  Horizontal scroll: ${hasHorizontalScroll ? 'YES (BAD)' : 'NO (GOOD)'}`);
    
    const filename = `mobile_${path.replace('/', '_') || 'home'}`;
    await page.screenshot({ path: `qa-${filename}.png`, fullPage: true });
    console.log(`  Screenshot: qa-${filename}.png`);
    
  } catch (err) {
    console.log(`  ERROR: ${err.message}`);
  }
}

console.log('\n=== QA Complete ===');
await browser.close();