import test,{Page} from "@playwright/test";

test('registration page test', async ({page})=>{
 await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
//  await page.getByRole('textbox',{name:"First Name"}).fill("enver");
//  await page.getByRole('textbox', {name:"Last Name"}).fill("Automation");
//  await page.getByRole('textbox', {name:"E-Mail"}).fill("enverAutomation@gmail.com")
//  await page.getByRole('button', {name:"Continue"}).click();
//  await page.pause();

 // await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
// await page.getByRole('link', {name:"Forgotten "}).last().click();
// await page.getByRole('link', {name:"Forgotten "}).nth(0).click()


await page.pause();
  
})