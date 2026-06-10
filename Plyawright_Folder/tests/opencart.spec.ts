import test,{Page} from "@playwright/test";
test.use({storageState:"/Users/enverjume/naveen_2026/enver/js_2026/storageState.json"})

test('open cart home page test', async ({page})=>{
 await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/account");

 await page.waitForTimeout(10000);

})

test('cart page test', async ({page})=>{
 await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart");

 await page.waitForTimeout(10000);

})