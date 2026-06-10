
// IIFE function: config file is nto applicable. IIFE: Immediately invoke function expression.
// (()=>{   
// })();

import { chromium, Browser, Page, firefox, webkit} from "playwright";

(async ()=>{
  // CFT: chrome for testing
  // chrome
  let browser:Browser = await  chromium.launch({channel:'chrome', headless:false})
  let page: Page = await browser.newPage();
  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
  await page.getByRole('textbox', {name:'E-Mail Address'}).fill('jane.moore442@nal.com');
  await page.getByRole('textbox' ,{name:'Password'}).fill('VJ{jnLG*h#nI');
  await page.getByRole('button',{name:'login'}).click();
  await page.waitForSelector("img[title='naveenopencart']");
  await page.context().storageState({path:'storageState.json'});
  await browser.close();

})();
