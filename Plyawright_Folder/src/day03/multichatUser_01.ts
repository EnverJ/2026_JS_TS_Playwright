import {Browser, BrowserContext, chromium, Page} from "@playwright/test";


// IIFE function: config file is nto applicable. IIFE: Immediately invoke function expression.
// (()=>{
    
// })();


(async ()=>{
  let browser:Browser = await  chromium.launch({channel:'chrome', headless:false, slowMo:500})

  let ctx1:BrowserContext = await browser.newContext();
   let ctx12:BrowserContext = await browser.newContext();

   let page1: Page =await ctx1.newPage();
   let page2: Page = await ctx12.newPage();

   page1.goto("https://www.google.com");
   page2.goto("https://www.google.com");
 
})();
