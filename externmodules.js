var fs = require('fs');
var http = require('http');
const playwright = require('playwright');
console.log(typeof(playwright));

/* var browser = await playwright.chromium.launch();
var context = await browser.context();
var page = await context.page();
 */


/* (async() => {
    for (const browserType of ['chromium', 'firefox', 'webkit']){
        const browser = await playwright[browserType].launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('http://www.google.com');
        await page.screenshot({path : `example-${browserType}.png`});
        await browser.close();
    }
})(); */
