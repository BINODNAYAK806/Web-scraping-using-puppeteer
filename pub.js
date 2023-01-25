const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  // await page.goto('https://app-staging.youshd.com');
  await page
  .goto("https://app-staging.youshd.com", {
    waitUntil: "networkidle0",
  })
  // await page.waitFor(200)
  // await page.waitForNavigation({waitUntil: 'networkidle2'})

  // await page.waitFor(2000);
  // // await page.waitForNavigation()
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  // await page.keyboard.press("Enter");
  // await page.keyboard.press("Tab");
  // await page.keyboard.press("Tab");
  // await page.keyboard.press("Tab");
  // Click on the login button
  // await page.waitFor(1000)
  // await page.waitForSelector('button#btn-login.btn-black')
  // await page.click('button#btn-login.btn-black');
  // // await page.waitFor(1000)
  // // Wait for the login page to load
  // await page.waitForSelector('[data-testid="country-select"]');

  // // Select India as the country
  // await page.select('[data-testid="country-select"]', 'IN');
  // await page.waitForNavigation({
  //   waitUntil: 'networkidle0 ',
  // });
  // // Enter mobile number
  // await page.type('input[name="phoneNo"]', '202 555 0196 ');

  // // Click on continue
  // await page.click('[data-testid="continue-button"]');

  // // Fill in the OTP
  // await page.type('input[name="otp"]', '123456');

  // // Click on continue
  // await page.click('[data-testid="continue-button"]');

  // // Wait for the next page to load
  // await page.waitForNavigation();
  // await page.waitForNavigation();

  // // Take a screenshot
  await page.screenshot({ path: 'next15_p.png' });
  await page.screenshot({ path: 'next18_p.png' });

  console.log('Screenshot taken');

  await browser.close();
})();
