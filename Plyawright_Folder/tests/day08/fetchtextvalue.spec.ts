import {test, Page, Browser} from "@playwright/test"

test('page loading state', async({page})=>{
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register",{waitUntil:'load'});
    await page.getByRole('textbox', {name: "First Name"}).fill("Naveen automation labs... ");
    let innerText = await page.getByRole('textbox', {name: "First Name"}).inputValue();
    console.log(innerText);







    


})