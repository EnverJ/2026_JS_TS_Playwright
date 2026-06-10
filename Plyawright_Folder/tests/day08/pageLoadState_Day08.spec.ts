import {test, Page, Browser} from "@playwright/test"

test('page loading state', async({page})=>{
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register",{waitUntil:'load'});

    // page loading state
    // load: all resources (image, element, scripts) loaded -- default option -- always a best option

    // domcontentloaded: HTML, DOM is paresed, DOM is ready

    // networkidle: no network activity for 500 ms.  -- Good? not a good practice

    // commit : first response byte received by the server



    


})