import test,{Page} from "@playwright/test";

test('element with place Holder  test', async ({page})=>{

 await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
await page.getByAltText("naveenopencart").highlight();
await page.waitForTimeout(4000);
await page.getByAltText("naveenopencart").click();
await page.waitForTimeout(4000);



await page.pause();
})