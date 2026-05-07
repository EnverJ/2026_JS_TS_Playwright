import {test, Page, Browser, Locator} from "@playwright/test"

test ("total links on the page", async({page})=>{

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register",{waitUntil:'load'});

    // links : <a>
    // image : <img>

    let allLinks:Locator[] = await page.locator('a[href]').all();

    let totalLinks = allLinks.length;
    console.log(totalLinks);

    for (let e of allLinks){
        let text = await e.innerText();
        let hrefVal = await e.getAttribute('href');
        console.log('text', text, 'hrefVal: ', hrefVal);

        
    }
});