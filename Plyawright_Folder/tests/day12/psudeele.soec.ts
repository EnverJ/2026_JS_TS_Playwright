import {test, Page, Browser} from "@playwright/test"
test('Psuedo element test', async({page})=>{
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    await page.evaluate(()=>{
        return window.getComputedStyle(document.querySelector('label[for="input-firstname"]'),'::before').getPropertyValue('content');
    });

    await page.pause();

})

