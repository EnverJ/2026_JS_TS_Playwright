import {test, Page, Browser, Locator} from "@playwright/test"

test ("total links texts", async({page})=>{

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register",{waitUntil:'load'});

    // let allLinks: string[] = await page.locator('//a[@href]').allInnerTexts();
    let allLinks: string[] = await page.locator('//a[@href]').allTextContents();

    for (let e of allLinks){
        console.log(e);

    }
});

test ("total links", async({page})=>{

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register",{waitUntil:'load'});

    // let allLinks: string[] = await page.locator('//a[@href]').allInnerTexts();
    let allCount = await page.locator('//a[@href]').count();
    console.log(allCount);

});

test ("iterate links and click with breaks", async({page})=>{

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register",{waitUntil:'load'});

    // let allLinks: string[] = await page.locator('//a[@href]').allInnerTexts();
    let allInner: Locator[] = await page.locator('//a[@href]').all();
    console.log(allInner);

    for (let e of allInner){

        let linkText = (await e.innerText()).trim();
   
        if (linkText === 'Forgotten Password'){
            await page.waitForTimeout(2000);
            await e.click();
            break;

        }

    }

});