import {test, Page, Browser, Locator} from "@playwright/test"
test('homework dropdown',async ({page})=>{
    await page.goto("https://jqueryscript.net/demo/Drop-Down-Combo-Tree/");

   // await page.locator('[name="Month"]').selectOption(['January', 'November', 'September']);
  

   await page.locator("#justAnInputBox").click();
  // await page.locator("span.comboTreeItemTitle").filter({hasText:'choice 5'}).first().click();

 // selectChoice(page, ['choice 5', 'choice 4', 'choice 6 2 2'])

 let el = page.locator("span.comboTreeItemTitle:visible");
 let a = await el.count();;
 for(let i = 0; i < a; i++){
    await el.nth(i).click();

 }

    await page.pause();

})


async function selectChoice(page:Page, choices:string[]):Promise<void>{
    for (let ch of choices){
        await page.locator('span.comboTreeItemTitle').filter({hasText: `${ch}`}).first().click();
    }

}


test('dynamic dropdown',async ({page})=>{
    await page.goto("https://www.amzon.com");

    await page.getByRole('searchbox',{name:"Search Amazon"}).fill('macbook pro');
    await page.locator('div.s-suggestion span').filter({hasText:'16 inch'}).click();
  

  

    await page.pause();

})