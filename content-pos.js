import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 720 });

await page.goto('https://cityboy2026.vercel.app/', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(2000);

const m = await page.evaluate(() => {
  const header = document.querySelector('header');
  const logo = header?.querySelector('a');
  const heroSection = document.querySelector('section');
  
  // Hero content wrapper - find the relative div
  const heroContentWrapper = heroSection?.children?.[1];
  
  // Get all direct children inside hero content wrapper
  const children = heroContentWrapper ? Array.from(heroContentWrapper.children).map((el, i) => ({
    index: i,
    tag: el.tagName,
    class: el.className?.slice(0, 40),
    left: el.getBoundingClientRect().left,
    top: el.getBoundingClientRect().top,
    text: el.textContent?.slice(0, 30)
  })) : [];
  
  return {
    logoLeft: logo?.getBoundingClientRect()?.left,
    heroWrapper: {
      left: heroContentWrapper?.getBoundingClientRect()?.left,
      right: heroContentWrapper?.getBoundingClientRect()?.right,
    },
    children
  };
});

console.log('=== Exact Content Positions ===');
console.log('Logo starts at x:', m.logoLeft);
console.log('\nHero content wrapper:');
console.log('  left:', m.heroWrapper.left, '| right:', m.heroWrapper.right);
console.log('\nHero children (content elements):');
m.children.forEach(c => console.log(`  [${c.index}] ${c.tag} (x:${c.left}) "${c.text}"`));

console.log('\nExpected: Hero content left should match Logo left (32)');
console.log('Actual hero wrapper left:', m.heroWrapper.left);

await browser.close();