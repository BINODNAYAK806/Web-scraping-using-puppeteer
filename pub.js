const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://app-staging.youshd.com/login');

  // Click on the login button
//   await page.click('[data-testid="common-padding-bottom"]');

  // Wait for the login page to load
  await page.waitForSelector('[data-testid="country-select"]');

  // Select India as the country
  await page.select('[data-testid="country-select"]', 'IN');

  // Enter mobile number
  await page.type('input[name="phoneNumber"]', '7016622167');

  // Click on continue
  await page.click('[data-testid="continue-button"]');

  // Fill in the OTP
  await page.type('input[name="otp"]', '123456');

  // Click on continue
  await page.click('[data-testid="continue-button"]');

  // Wait for the next page to load
  await page.waitForNavigation();

  // Take a screenshot
  await page.screenshot({ path: 'next_page.png' });

  console.log('Screenshot taken');

  await browser.close();
})();
