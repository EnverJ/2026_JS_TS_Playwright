import {test, Page, Browser} from "@playwright/test"

test('back and forward button simulation test', async({page})=>{
   await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
   console.log(await page.title());

   await page.goto("https://google.com");
   console.log(await page.title());

   await page.goBack();
   console.log(await page.title());

   await page.goForward();
   console.log(await page.title());

   // refresh the page
   await page.reload();

})