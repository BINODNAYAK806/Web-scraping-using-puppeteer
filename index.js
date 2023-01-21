const { default: puppeteer } = require("puppeteer");

// import puppeteer from 'puppeteer';
    // const puppeteer = require (puppeteer)

    (async () => {
        const browser = await puppeteer.launch({headless :false});
        const page = await browser.newPage();
        
        await page.goto('https://www.staples.com/Painting-Supplies/cat_CL140420/bww15')
        await page.waitForSelector("button.add-to-cart-btn.addToCart" ,{visible: true})
        await page.click('button.add-to-cart-btn.addToCart')
        await page.waitForSelector('h4.cart-items-header')
        await page.screenshot({ path: "screenshot.png" })




        // const winner = await Promise.race([
        //     page.waitForSelector('[data-path="join or login"]'),
        //     page.waitForSelector('[data-path="sign in"]')
        // ])
    
        // await page.click(winner._remoteObject.description)
    
        // await page.waitForSelector("addtocartbtn" ,{visible: true})
        // await page.click("addtocartbtn")
        // await page.screenshot({path:'exa.png'});
        await browser.close()  



    })();