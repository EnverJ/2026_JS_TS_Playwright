import test,{Page} from "@playwright/test";

test('element with place Holder  test', async ({page})=>{

 await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
// this attribute data-testid must be there
 await page.getByTestId("email-input").fill("enver@gmail.com")

// for other format of test id, change the tesIdAttribute in the playwright.config.ts file

await page.pause();
})