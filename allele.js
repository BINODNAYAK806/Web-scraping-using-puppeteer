const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://app-staging.youshd.com/');
  
  // Find all selectors on the page
  const selectors = await page.$$('*');
  console.log(`Number of selectors on the page: ${selectors.length}`);

  // Print all selectors
//   selectors.forEach((selector, index) => {
//     console.log(`Selector ${index+1}: `, selector);
//   });
    console.log(selectors[1])
  await browser.close();
})();
