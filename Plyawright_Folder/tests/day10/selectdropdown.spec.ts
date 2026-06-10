

// html tag : <select> : 

import {test, Page, Browser, Locator} from "@playwright/test"

test('select from dropdown list',async ({page})=>{
    await page.goto('https://orangehrm.com/contact-sales');

    await page.getByRole('combobox', {name:"country"}).selectOption({label:"Andorra"});
    await page.waitForTimeout(3000)
    await page.getByRole('combobox', {name:"country"}).selectOption({value:"India"});
    await page.waitForTimeout(3000)
    await page.getByRole('combobox', {name:"country"}).selectOption({index:10});
      let currentVal = await page.getByRole('combobox', {name:"country"}).inputValue();
      console.log(currentVal);

    await page.pause();

})

test('multi select dropdown',async ({page})=>{
    await page.goto('https://selenium08.blogspot.com/2019/11/dropdown.html');

    await page.locator('[name="Month"]').selectOption(['January', 'November', 'September']);
  

  

    await page.pause();

})

test('homework dropdown',async ({page})=>{
    await page.goto("https://magupdate.co.uk/magazine-subscription/phrr");

    await page.getByRole('radio',{name:"I wish to receive FREE copies of HR Magazine regularly."}).check();
  //  await page.getByRole('textbox', {name:"Title"}).fill("This is automation");
    await page.getByRole("textbox",{name:"Initials"}).fill("AT");
    await page.getByRole("textbox",{name:"Forename"}).fill("Earth");
    await page.getByRole("textbox",{name:"Surname"}).fill("Automation");
    await page.getByRole("textbox",{name:"Internal Routing Code"}).fill('123-23-23');
    await page.getByRole("textbox",{name:"Direct Email"}).fill("automation@automation.com");
    await page.getByRole("textbox",{name:"Direct Telephone"}).fill("8908 989 989");
    await page.getByRole("textbox",{name:"Job Title"}).fill("Automation Engineer");
    await page.getByRole("textbox",{name:"Company Name"}).fill("Nur Automation");
    await page.getByRole("textbox",{name:"Address Line 1"}).fill("90909 ea ontario street, MT, US");
    await page.getByRole("textbox",{name:"Address Line 2"}).fill("montana");
    await page.getByRole("textbox",{name:"Address Line 3"}).fill("US");
    await page.getByRole("textbox",{name:"Town / City"}).fill("Orion");
    await page.getByRole("textbox",{name:"County / State"}).fill("North Town");
    await page.locator("#Contact_CountryCode").selectOption({label:"United Kingdom"});
    await page.getByRole("textbox",{name:"Postcode / Zipcode"}).fill("90344");
    await page.getByRole("textbox",{name:"Company Telephone Number"}).fill("9809 9080 098");
    await page.getByRole("textbox",{name:"Company Website"}).fill("https://www.automation.com");
    await page.locator("#Question-100034").selectOption({label:"Paper"});
    await page.locator("#Question-758").selectOption({label:"Finance Director"});
    await page.locator("#Question-875").fill('Dev');
    await page.locator("#Question-759").selectOption({label:"Construction"});
    await page.locator("#Question-876").fill("Playwright");

    let el:Locator = page.locator("div.form-check");
    const count = await el.count();
    for(let i = 0; i < count; i++){
        await el.nth(i).click();
        await page.waitForTimeout(100);

    }
    await page.locator("#Question-874").fill("100");
    await page.locator("select#Question-762").selectOption({label:"1-4"});
    await page.locator("select#Question-763").selectOption({label:"£100,000-£499,999"});
    await page.locator("input#Question-639").fill("trust");

    await page.getByRole('button',{name:"Submit Request"}).click();









   // await page.locator('[name="Month"]').selectOption(['January', 'November', 'September']);

  

  

    await page.pause();

})
