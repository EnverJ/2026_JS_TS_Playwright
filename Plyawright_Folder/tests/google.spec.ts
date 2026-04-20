import test,{Page} from "@playwright/test";

test('google title test', async ({page})=>{
 await page.goto("https://www.google.com");
  let title:string =await page.title(); // 
  console.log(title);

  let pageUrl:string = page.url();
  console.log(pageUrl);
  // await page.waitForTimeout(5000);
})