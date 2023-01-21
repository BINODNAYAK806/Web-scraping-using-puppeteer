

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://www.flipkart.com');
  //Type mobile in the search box
  await page.type('input[name="q"]', 'mobile');
  //press enter
  await page.keyboard.press('Enter');
  // Wait for the search results to load
  await page.waitForSelector('div._3wU53n');
  // Take a screenshot
  await page.screenshot({path: 'search_results.png'});

  console.log('Screenshot taken');

  await browser.close();
})();
