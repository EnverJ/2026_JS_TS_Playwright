

import {test, Page, Browser} from "@playwright/test"
test('Psuedo element test', async({page})=>{
   
    // 1. listener
    // Alert --> just accept it

    page.on('dialog', async(popup)=>{
        if(popup.type()==='alert'){
            await popup.accept();
        }
    })

     //  listener
    // 2. confirmation alert --> ok, cancel
     // age.on vs page.once
    page.on('dialog', async(popup)=>{
        if(popup.type()==='confirm'){
            await popup.accept(); // clicks on ok
        //    await popup.dismiss();// dismiss
        }
    })

    // listener
    // 3. Prompt --> just accept it

    page.on('dialog', async(popup)=>{
        if(popup.type()==='prompt'){
            await popup.accept("naveen automation lab");
        }
    })

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    await page.getByRole("button", {name:"Click for JS Alert"}).click();
    await page.waitForTimeout(3000)

    await page.getByRole("button", {name:"Click for JS Confirm"}).click();
     await page.waitForTimeout(3000)
    await page.getByRole("button", {name:"Click for JS Prompt"}).click();
     await page.waitForTimeout(3000)

      await page.getByRole("button", {name:"Click for JS Alert"}).click();
    await page.waitForTimeout(3000)

    await page.getByRole("button", {name:"Click for JS Confirm"}).click(); // this wont be handled. since it is page.once
     await page.waitForTimeout(3000)
    await page.getByRole("button", {name:"Click for JS Prompt"}).click();
     await page.waitForTimeout(3000)

  
    await page.pause();

})

