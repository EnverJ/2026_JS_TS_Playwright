import {test, Page, Browser, FrameLocator, Frame} from "@playwright/test"
test('shadow dom element test',async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');

    await page.locator("#shadow-btn").click();

    //form
    await page.locator("#username").fill("autoamtion");
    await page.getByRole("button", {name:"Submit"}).click();

    // 2 level shadow dom

    await page.locator("#inner-input").fill("I love pw")

    // 3. close Shadow DOM
    await page.locator("#closed-input").fill("hey its closed");

 


  

  

    await page.pause();

})