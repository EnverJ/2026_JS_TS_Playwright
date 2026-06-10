
// IIFE function: config file is nto applicable. IIFE: Immediately invoke function expression.
// (()=>{
    
// })();

import { chromium, Browser, Page, firefox, webkit} from "playwright";

(async ()=>{
  // CFT: chrome for testing
  //let browser:Browser = await  chromium.launch({channel:'chromium', headless:false})
  // chrome
  let browser:Browser = await  chromium.launch({channel:'chrome', headless:false})
 // edge
 //let browser:Browser = await  chromium.launch({channel:'msedge', headless:false})
 // opera
 //let browser:Browser = await  chromium.launch({ headless:false, executablePath:"path to opera executable file""})
 // brave
 //let browser:Browser = await  chromium.launch({ headless:false, executablePath:"path to brave executable file""})

 //firefox: Nightly build. we cannot original firefox yet
 // let browser:Browser =await firefox.launch({headless:false})

 // safari: webkit
 // let browser:Browser = await webkit.launch({headless:false});
  let page:Page = await browser.newPage();
   await page.goto("https://www.google.com")
   let title:String = await page.title();
   console.log("title is ", title);
   let url: string = page.url();
   console.log("url is ", url);
    browser.close();
})();
