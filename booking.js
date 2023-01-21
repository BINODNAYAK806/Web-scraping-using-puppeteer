const { default: puppeteer } = require("puppeteer");
(async () => {
    const browser = await puppeteer.launch({headless :false})
    const page = await browser.newPage()
    await page.goto('https://booking.com')
    // await page.waitForSelector('#ss')
    // await page.type('#ss', 'Berlin')
    popup.waitForNavigation({ waitUntil: 'networkidle0' })

    await page.click('.sb-searchbox__button')
    // await page.waitForSelector('#hotellist_inner')
    await page.screenshot({ path: "screenshot.png" })
    
    // console.log(hotels)
    await browser.close()
    // console.log('See screenshot: ' + screenshot)
   })()
  