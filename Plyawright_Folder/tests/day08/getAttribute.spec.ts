import {test, Page, Browser} from "@playwright/test"

test('', async ({page})=>{
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register",{waitUntil:'load'});

    let placeholder = await page.getByRole('textbox', {name: 'First Name'}).getAttribute('placeholder');
    console.log(placeholder);

    let hrefVal = await page.getByRole('link', {name:"Forgotten Password"}).getAttribute('href');
    console.log(hrefVal);
    
});