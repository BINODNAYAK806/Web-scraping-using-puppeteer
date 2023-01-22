const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://app-staging.youshd.com/');

    // Get the selector of the login/sign up button
    const loginButtonSelector = await page.evaluate(() => {
        return document.querySelector('[data-testid="login-button"]').getAttribute('data-testid');
    });

    console.log(loginButtonSelector); // output: 'login-button'
    await browser.close();
})();
