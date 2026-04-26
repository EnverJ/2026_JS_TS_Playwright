import test,{Page} from "@playwright/test";

test('element with place Holder  test', async ({page})=>{

 await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
await page.getByPlaceholder("First Name").fill("Testing");
await page.getByPlaceholder("Telephone").fill("123434124234324");
await page.getByPlaceholder("Password",{exact:true}).fill("1rest-restr");
await page.getByPlaceholder("Password Confirm").fill("123434124234324");



await page.pause();
})