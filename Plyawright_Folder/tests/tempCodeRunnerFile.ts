import test from "@playwright/test";

test('google test', async ({page})=>{
  await page.goto("https://www.google.com");
  let title:string =await page.title();
  console.log(title);

  let pageUrl:string = page.url();
  console.log(pageUrl);

})