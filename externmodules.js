//var fs = require('fs');
//fixconfig branch
//Understand-Branches-commit3
//modifying Rebase-branch
var http = require('http');
const playwright = require('playwright');
console.log(typeof(playwright));
/* var chromeBrowser = playwright.chromium.launch();
var firefoxBroswer = playwright.firefox.launch();

const context = chromeBrowser.newContext();
const page =  context.newPage();
 page.goto("https://playwright.dev");
 page.waitForTimeout(5000);
 browser.close(); */


(async function(){
  const browser = await playwright.webkit.launch({ headless: false }); // Non-headless mode to feel comfy
  const context = await browser.newContext(); // So much to say, but another time
  const page = await context.newPage(); // Create a new Page instance which handles most of your needs
  await page.goto("https://playwright.dev"); // Navigate to the Playwright webpage
  await page.waitForTimeout(5000); // Rest your eyes for five seconds
  await browser.close(); // Close the browser
})();

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
