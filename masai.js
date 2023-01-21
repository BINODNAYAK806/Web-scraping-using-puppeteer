const { default: puppeteer } = require("puppeteer");


// const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless :false});
  const page = await browser.newPage();
  await page.goto('https://course.masaischool.com/login');

  // Type in the email and password
  await page.type('input[name="email"]', 'binodnayak806@yahoo.com');
  await page.type('input[name="password"]', '3614db009@A');

  // Click the login button
  await page.click('button[type="submit"]');

  // Wait for login to complete 
  await page.waitForNavigation();
  await page.click('button[type="Bookmarks"]');  
  // Check if the user is logged in
  await page.screenshot({ path: "masaiB.png" })
  if(page.url() === 'https://course.masaischool.com/dashboard') {
    console.log('Login successful');
  } else {
    console.log('Login failed');
  }
  await page.screenshot({ path: "masaiB.png" })
  
  await browser.close();
})();
