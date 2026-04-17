import { test, expect, Page, chromium, Browser } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('google test', async ({page})=>{
  await page.goto("https://www.google.com");
  let title:string =await page.title();
  console.log(title);

  let pageUrl:string = page.url();
  console.log(pageUrl);

})

//this can be use for browser context concept
test('google test browser', async ({browser})=>{
 let page:Page = await browser.newPage();
 await page.goto("https://www.google.com");
  let title:string =await page.title();
  console.log(title);

  let pageUrl:string = page.url();
  console.log(pageUrl);
})

test('google test zero destructuring', async ({})=>{
  let browser:Browser = await chromium.launch({channel:"chromium", headless:false})
 let page:Page = await browser.newPage(); // create a new page
 await page.goto("https://www.google.com");
  let title:string =await page.title(); // 
  console.log(title);

  let pageUrl:string = page.url();
  console.log(pageUrl);
})


